import { Link } from 'react-router-dom';
import './LoginedNavigation.css';

function LoginedNavigation() {
  const closeNav = () => {
    document.querySelector('.logined-nav').classList.add('logined-nav_hidden');
  };

  return (
    <nav className='logined-nav logined-nav_hidden'>
      <Link
        to='/'
        className={`logined-nav__link logined-nav__link_hidden ${
          window.location.pathname === '/' &&
          'logined-nav__link_activated'
        }`}
      >
        Главная
      </Link>
      <Link
        to='/movies'
        className={`logined-nav__link ${
          window.location.pathname === '/movies' &&
          'logined-nav__link_activated'
        }`}
      >
        Фильмы
      </Link>
      <Link
        to='/saved-movies'
        className={`logined-nav__link ${
          window.location.pathname === '/saved-movies' &&
          'logined-nav__link_activated'
        }`}
      >
        Сохранённые фильмы
      </Link>
      <Link
        to='/profile'
        className='logined-nav__link logined-nav__link_button-like'
      >
        Аккаунт
      </Link>
      <button className='logined-nav__close-button' onClick={closeNav}></button>
    </nav>
  );
}

export default LoginedNavigation;
