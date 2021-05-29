import { Link } from 'react-router-dom';
import './SignTop.css';

function SignTop(props) {
  return (
    <header className='sign-top'>
      <Link to='/' className='header__logo'></Link>
      <h1 className='sign-top__greetings'>{props.message}</h1>
    </header>
  );
}

export default SignTop;
