import { Link } from 'react-router-dom';
import LoginedNavigation from '../LoginedNavigation/LoginedNavigation';
import './Navigation.css';

function Navigation(props) {
  const { isLogined } = props;

  if (isLogined === true)
    return <LoginedNavigation />;
  else
    return (
      <nav>
        <Link to='/signup' className='nav__link'>
          Регистрация
        </Link>
        <Link to='/signin' className='nav__link nav__link_button-like'>Войти</Link>
      </nav>
    );
}

export default Navigation;
