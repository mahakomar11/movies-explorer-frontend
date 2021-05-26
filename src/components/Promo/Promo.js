import './Promo.css';
import Header from '../Header/Header';

function Promo() {
  return (
    <section className='promo'>
      <Header isLogined={false}/>
      <div className='promo__background'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
