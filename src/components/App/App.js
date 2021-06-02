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
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleLogin(loginData) {
    mainApi
      .loginUser(loginData)
      .then((data) => {
        setLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    mainApi.logoutUser();
  }
  // React.useEffect(() => {
  //   mainApi
  //     .loginUser({ email: 'isis@email.com', password: '88888888' })
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route exact path='/movies'>
        <Movies />
      </Route>
      <Route exact path='/saved-movies'>
        <SavedMovies />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/signin'>
        <Login onLogin={handleLogin}/>
      </Route>
      <Route exact path='/signup'>
        <Register />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
