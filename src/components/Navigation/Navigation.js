import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  const { isLogined } = props;

  if (isLogined === true)
    return (
      <nav>
        <Link to='/movies' className='nav__link nav__link_logined nav__link_activated'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='nav__link nav__link_logined'>
          Сохранённые фильмы
        </Link>
        <button className='nav__button nav__button_logined'>Аккаунт</button>
      </nav>
    );
  else
    return (
      <nav>
        <Link to='/signup' className='nav__link'>
          Регистрация
        </Link>
        <button className='nav__button'>Войти</button>
      </nav>
    );
}

export default Navigation;
