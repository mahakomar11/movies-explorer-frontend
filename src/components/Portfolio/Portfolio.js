import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/mahakomar11/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт<span>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/mahakomar11/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт<span>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/mahakomar11/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение<span>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
