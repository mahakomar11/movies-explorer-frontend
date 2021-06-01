import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const showNav = () => {
    document.querySelector('.logined-nav').classList.remove('logined-nav_hidden');
  }

  return (
    <header className='header'>
      <Link to='/' className='header__logo'></Link>
      <Navigation isLogined={props.isLogined}/>
      {props.isLogined && <button className='header__burger' onClick={showNav}></button>}
    </header>
  );
}

export default Header;
