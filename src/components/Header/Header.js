import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'></Link>
      <Navigation />
    </header>
  );
}

export default Header;
