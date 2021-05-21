import { Route, Switch } from 'react-router-dom'
import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'

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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
