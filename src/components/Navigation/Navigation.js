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
        <Link to='/profile' className='nav__link nav__link_logined nav__link_for_account'>Аккаунт</Link>
      </nav>
    );
  else
    return (
      <nav>
        <Link to='/signup' className='nav__link'>
          Регистрация
        </Link>
        <Link to='/signin' className='nav__link nav__link_for_signin'>Войти</Link>
      </nav>
    );
}

export default Navigation;
