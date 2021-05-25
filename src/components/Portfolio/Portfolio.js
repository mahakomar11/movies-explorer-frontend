import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='#'>
            Статичный сайт<span>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='#'>
            Адаптивный сайт<span>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='#'>
            Одностраничное приложение<span>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
