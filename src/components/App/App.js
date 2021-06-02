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

function App() {
  const history = useHistory();
  const [isLogined, setIsLogined] = React.useState(false);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .loadLoginedUser(jwt)
        .then((data) => {
          if (data) {
            console.log(data);
            setIsLogined(true);
            history.push('/movies');
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [history, isLogined]);

  function handleLogin(loginData) {
    mainApi
      .loginUser(loginData)
      .then((data) => {
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

  return (
    <Switch>
      <Route exact path='/'>
        <Main isLogined={isLogined} />
      </Route>
      <Route exact path='/movies'>
        <Movies />
      </Route>
      <Route exact path='/saved-movies'>
        <SavedMovies />
      </Route>
      <Route exact path='/profile'>
        <Profile onLogout={handleLogout} />
      </Route>
      <Route exact path='/signin'>
        <Login onLogin={handleLogin} />
      </Route>
      <Route exact path='/signup'>
        <Register onRegister={handleRegister}/>
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
