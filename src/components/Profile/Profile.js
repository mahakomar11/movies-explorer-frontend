import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <section className='profile'>
      <Header isLogined={true} />
      <div className='profile__container'>
        <h1 className='profile__greetings'>Привет, Виталя!</h1>
        <p className='profile__block profile__block_info_name'>
          <p className='profile__block-label'>Имя</p>
          <p className='profile__block-value'>Виталя</p>
        </p>
        <p className='profile__block profile__block_info_email'>
          <p className='profile__block-label'>E-mail</p>
          <p className='profile__block-value'>pochta@yandex.ru</p>
        </p>
        <button className='profile__button profile__button_action_edit'>
          Редактировать
        </button>
        <button className='profile__button profile__button_action_logout'>
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
