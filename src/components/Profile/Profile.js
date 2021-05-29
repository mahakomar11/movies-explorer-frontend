import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <section className='profile'>
      <Header isLogined={true} />
      <h1 className='profile__greetings'>Привет, Виталя!</h1>
      <form className='profile__form'>
        <fieldset className='profile__fieldset'>
          <label className='profile__label'>
            Имя
            <input className='profile__input' value='Виталя' disabled/>
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              value='pochta@yandex.ru'
              disabled
            />
          </label>
        </fieldset>
        <fieldset className='profile__fieldset'>
          <button className='profile__button profile__button_action_edit'>
            Редактировать
          </button>
          <button className='profile__button profile__button_action_logout'>
            Выйти из аккаунта
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;
