import './AboutMe.css';
import vitalya from '../../images/vitalya.svg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='main__subtitle'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Виталий</h3>
          <h4 className='about-me__profession'>Фронтенд-разработчик, 30 лет</h4>
          <p className='about-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <nav className='about-me__nav'>
            <a className='about-me__link' href='facebook.com'>
              Facebook
            </a>
            <a className='about-me__link' href='github.com'>
              GitHub
            </a>
          </nav>
        </div>
        <img src={vitalya} alt='Фото Виталия' className='about-me__photo'></img>
      </div>
    </section>
  );
}

export default AboutMe;
