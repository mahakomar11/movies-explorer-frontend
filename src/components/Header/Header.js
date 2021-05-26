import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'></Link>
      <Navigation isLogined={props.isLogined}/>
    </header>
  );
}

export default Header;
