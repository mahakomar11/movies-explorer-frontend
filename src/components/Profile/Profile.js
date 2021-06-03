import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile(props) {
  const { onLogout } = props;
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className='profile'>
      <Header isLogined={true} />
      <form className='profile__form'>
        <h1 className='profile__greetings'>Привет, {currentUser.name}!</h1>
        <fieldset className='profile__fieldset'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='name'
              value={currentUser.name}
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
              value={currentUser.email}
              minLength={2}
              required
              disabled
            />
          </label>
        </fieldset>
        <fieldset className='profile__fieldset profile__fieldset_content_buttons'>
          <button className='profile__button profile__button_action_edit'>
            Редактировать
          </button>
          <button
            className='profile__button profile__button_action_logout'
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;
