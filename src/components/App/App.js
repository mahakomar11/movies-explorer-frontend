import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

// TODO: адаптировать
// TODO: сжать изображения
// TODO: перевести line-height в относительные величины

function App() {
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
        <Login />
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
