import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
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
