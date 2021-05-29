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
            <input
              className='profile__input'
              type='text'
              name='name'
              value='Виталя'
              minLength={2}
              maxLength={40}
              required
              disabled
            />
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              type='email'
              name='email'
              value='pochta@yandex.ru'
              minLength={2}
              required
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
