import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className='no-page'>
      <p className='no-page__code'>404</p>
      <p className='no-page__message'>Запрашиваемая страница не найдена</p>
      <Link to='/' className='no-page__link'>
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
