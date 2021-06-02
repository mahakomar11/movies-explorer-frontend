import './Promo.css';
import Header from '../Header/Header';

function Promo(props) {
  const {isLogined} = props;
  return (
    <section className='promo'>
      <Header isLogined={isLogined}/>
      <div className='promo__background'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
