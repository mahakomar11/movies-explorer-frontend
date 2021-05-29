import './AboutMe.css';
import photo from '../../images/me.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='main__subtitle'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Мария</h3>
          <h4 className='about-me__profession'>Разработчик, 27 лет</h4>
          <p className='about-me__description'>
            Я закончила биологический факультет МФТИ и сейчас совершаю
            постепенный переход из науки в IT. С 2017 года пишу на Python, в
            основном в наукоёмкой сфере: анализ данных, исследования
            иммунитета, чтение мыслей, все дела. После курса по
            фронтенд-разработке поняла, что мне нравится и фронтенд, и бэкенд.
            Но Python нравится чуть больше, чем JS:) Но главное - это кодить в
            интересном и важном проекте. Чего и ищу:)
          </p>
          <nav className='about-me__nav'>
            <a
              className='about-me__link'
              href='https://www.linkedin.com/in/maria-komarova-23265318b/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
            <a
              className='about-me__link'
              href='https://github.com/mahakomar11'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </nav>
        </div>
        <img
          src={photo}
          alt='Фото красотки какой-то'
          className='about-me__photo'
        ></img>
      </div>
    </section>
  );
}

export default AboutMe;
