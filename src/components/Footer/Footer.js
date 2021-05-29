import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright-block'>
        <p className='footer__year'>© 2020</p>
        <nav>
          <a
            href='https://praktikum.yandex.ru/'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            href='https://github.com/mahakomar11'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
          <a
            href='https://www.linkedin.com/in/maria-komarova-23265318b/'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
