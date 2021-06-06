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
import filterMovies from '../../utils/filter';

function App() {
  const history = useHistory();
  const [isLogined, setIsLogined] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [foundMoviesList, setFoundMoviesList] = React.useState([]);
  const [foundSavedMoviesList, setFoundSavedMoviesList] = React.useState([]);
  const [searchMessage, setSearchMessage] = React.useState();
  const [searchParams, setSearchParams] = React.useState();

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
  }, []);

  // If logined, get saved movies
  React.useEffect(() => {
    if (isLogined) {
      mainApi
        .getSavedMovies()
        .then((data) => setSavedMoviesList(data))
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
    if (Boolean(searchParams) & (moviesList.length === 0)) {
      moviesApi
        .getMovies()
        .then((data) => setMoviesList(data))
        .catch((err) =>
          setSearchMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          )
        );
    }
  }, [searchParams, moviesList]);

  // Get search results
  React.useEffect(() => {
    if (Boolean(searchParams) & (moviesList.length !== 0)) {
      setFoundMoviesList(
        filterMovies(moviesList, searchParams.keyword, searchParams.isShort)
      );
      console.log(searchParams);
    }
  }, [searchParams, moviesList]);

  // Update searchMessage and preloader
  React.useEffect(() => {
    if (
      Boolean(searchParams) &
      (foundMoviesList.length === 0) &
      (moviesList.length !== 0)
    )
      setSearchMessage('Ничего не найдено');
    else if (
      Boolean(searchParams) &
      (foundMoviesList.length === 0) &
      (moviesList.length === 0)
    )
      console.log('preloader');
  }, [searchParams, foundMoviesList, moviesList]);

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
    localStorage.removeItem('jwt');
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

  function handleLoadFilms(keyword, isShort) {
    setSearchParams({ keyword: keyword, isShort: isShort });
  }

  function handleLoadSavedFilms(keyword, isShort) {
    console.log('loaddddd');
    setFoundSavedMoviesList(filterMovies(savedMoviesList, keyword, isShort));
    console.log();
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
      .then((data) => setSavedMoviesList([...savedMoviesList, data]))
      .catch((err) => console.log(err));
  }

  function handleMovieDelete(movieCard) {
    const movieToDelete = savedMoviesList.find(
      (savedMovie) => savedMovie.movieId === movieCard.id
    );

    mainApi
      .deleteMovie(movieToDelete._id)
      .then((data) =>
        setSavedMoviesList(
          savedMoviesList.filter((savedMovie) => savedMovie !== movieToDelete)
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
            moviesList={foundMoviesList}
            savedMoviesList={savedMoviesList}
            onSearch={handleLoadFilms}
            onMovieSave={handleMovieSave}
            onMovieDelete={handleMovieDelete}
            message={searchMessage}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path='/saved-movies' isLogined={isLogined}>
          <SavedMovies
            savedMoviesList={foundSavedMoviesList}
            onSearch={handleLoadSavedFilms}
            onMovieDelete={handleMovieDelete}
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
