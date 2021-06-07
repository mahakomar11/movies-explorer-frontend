import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useSearchMovies from '../SearchMovies/SearchMovies';
import { showPreloader, hidePreloader } from '../../utils/preloader';

function App() {
  const history = useHistory();
  const [isLogined, setIsLogined] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchParams, setSearchParams] = React.useState({
    keyword: '',
    isShort: false,
  });
  const [searchParamsSaved, setSearchParamsSaved] = React.useState({
    keyword: '',
    isShort: false,
  });
  const [result, setResult] = useSearchMovies(movies, searchParams);
  const [resultSaved, setResultSaved] = useSearchMovies(
    savedMovies,
    searchParamsSaved
  );

  // Load jwt
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .loadLoginedUser(jwt)
        .then((data) => {
          if (data) {
            setCurrentUser({ name: data.name, email: data.email });
            setIsLogined(true);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [isLogined]);

  React.useEffect(() => {
    const localParams = localStorage.getItem('searchParams');
    const localParamsSaved = localStorage.getItem('searchParamsSaved');
    if (localParams) setSearchParams(JSON.parse(localParams));
    if (localParamsSaved) setSearchParamsSaved(JSON.parse(localParamsSaved));
  }, []);

  React.useEffect(() => {
    if (searchParams.keyword !== '')
      localStorage.setItem('searchParams', JSON.stringify(searchParams));
    if (searchParamsSaved.keyword !== '')
      localStorage.setItem(
        'searchParamsSaved',
        JSON.stringify(searchParamsSaved)
      );
  }, [searchParams, searchParamsSaved]);

  // If logined, get saved movies
  React.useEffect(() => {
    if (isLogined) {
      mainApi
        .getSavedMovies()
        .then((data) => setSavedMovies(data))
        .catch((err) => console.log(err));
    }
  }, [isLogined]);

  // If logined, redirect to /movies
  React.useEffect(() => {
    if (isLogined) {
      history.push('/movies');
    }
  }, [isLogined, history]);

  // If user create his first search, load all movies
  React.useEffect(() => {
    if ((searchParams.keyword !== '') & (movies.length === 0)) {
      showPreloader();
      moviesApi
        .getMovies()
        .then((data) => setMovies(data))
        .catch(() =>
          setResult({
            ...result,
            resultMessage:
              'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          })
        )
        .finally(() => hidePreloader());
    }
  }, [searchParams, movies, result, setResult]);

  // When no search params in SavedMovies, display all saved movies
  React.useEffect(() => {
    if (searchParamsSaved.keyword === '')
      setResultSaved({ foundMovies: savedMovies, resultMessage: '' });
  }, [savedMovies, searchParamsSaved, setResultSaved]);

  function handleLogin(loginData) {
    mainApi
      .loginUser(loginData)
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email });
        setIsLogined(true);
        localStorage.setItem('jwt', data.token);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setIsLogined(false);
    mainApi.logoutUser();
    history.push('/');
  }

  function handleRegister(registerData) {
    mainApi
      .registerUser(registerData)
      .then((data) => {
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleEditProfile(newProfileData) {
    mainApi
      .patchUserInfo(newProfileData)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(err));
  }

  function handleSearch({ keyword, isShort }) {
    setSearchParams({ keyword, isShort });
  }

  function handleSearchSaved({ keyword, isShort }) {
    setSearchParamsSaved({ keyword, isShort });
  }

  function handleMovieSave(movieCard) {
    const movieId = movieCard.id;
    const {
      country,
      director,
      duration,
      year,
      description,
      nameRU,
      nameEN,
      image,
      trailer,
      thumbnail,
    } = movieCard;

    mainApi
      .saveMovie({
        movieId,
        image,
        thumbnail,
        trailer,
        country,
        director,
        duration,
        year,
        description,
        nameRU,
        nameEN,
      })
      .then((data) => setSavedMovies([...savedMovies, data]))
      .catch((err) => console.log(err));
  }

  function handleMovieDelete(movieCard) {
    const movieToDelete = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movieCard.id
    );

    mainApi
      .deleteMovie(movieToDelete._id)
      .then((data) =>
        setSavedMovies(
          savedMovies.filter((savedMovie) => savedMovie !== movieToDelete)
        )
      )
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main isLogined={isLogined} />
        </Route>
        <Route exact path='/signin'>
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path='/signup'>
          <Register onRegister={handleRegister} />
        </Route>
        <ProtectedRoute exact path='/movies' isLogined={isLogined}>
          <Movies
            moviesList={result.foundMovies}
            savedMoviesList={savedMovies}
            message={result.resultMessage}
            searchParams={searchParams}
            onSearch={handleSearch}
            onMovieSave={handleMovieSave}
            onMovieDelete={handleMovieDelete}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path='/saved-movies' isLogined={isLogined}>
          <SavedMovies
            moviesList={resultSaved.foundMovies}
            searchParams={searchParamsSaved}
            onSearch={handleSearchSaved}
            onMovieDelete={handleMovieDelete}
            message={resultSaved.resultMessage}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path='/profile' isLogined={isLogined}>
          <Profile onLogout={handleLogout} onSubmit={handleEditProfile} />
        </ProtectedRoute>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
