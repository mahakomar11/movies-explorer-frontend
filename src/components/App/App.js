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

function App() {
  const history = useHistory();
  const [isLogined, setIsLogined] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      console.log('load data');
      mainApi
        .loadLoginedUser(jwt)
        .then((data) => {
          if (data) {
            console.log('data', data);
            setCurrentUser({ name: data.name, email: data.email });
            setIsLogined(true);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  React.useEffect(() => {
    if (isLogined) {
      mainApi
        .getSavedMovies()
        .then((data) => setSavedMoviesList(data))
        .catch((err) => console.log(err));
    }
  }, [isLogined]);

  React.useEffect(() => {
    if (isLogined) {
      history.push('/movies');
    }
  }, [isLogined, history]);

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

  function handleLoadFilms() {
    moviesApi
      .getMovies()
      .then((data) => setMoviesList(data))
      .catch((err) => console.log(err));
  }

  function handleMovieSave(movie) {
    console.log(movie);
    const movieId = movie.id;
    const image = `https://api.nomoreparties.co${movie.image.url}`;
    const thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    const trailer = movie.trailerLink;
    const { country, director, duration, year, description, nameRU, nameEN } =
      movie;
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

  function handleMovieDelete(movie) {
    const movieToDelete = savedMoviesList.find(
      (savedMovie) => savedMovie.movieId === movie.id
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
            moviesList={moviesList}
            savedMoviesList={savedMoviesList}
            onSearch={handleLoadFilms}
            onMovieSave={handleMovieSave}
            onMovieDelete={handleMovieDelete}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path='/saved-movies' isLogined={isLogined}>
          <SavedMovies
            moviesList={moviesList}
            savedMoviesList={savedMoviesList}
            onSearch={() => {}}
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
