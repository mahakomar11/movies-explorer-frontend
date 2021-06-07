import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';

function Profile(props) {
  const { onLogout, onSubmit } = props;
  const currentUser = React.useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, handleSubmit } = useFormWithValidation(
    currentUser,
    { name: '', email: '' },
    onSubmit
  );

  return (
    <section className='profile'>
      <Header isLogined={true} />
      <form className='profile__form' onSubmit={handleSubmit}>
        <h1 className='profile__greetings'>Привет, {currentUser.name}!</h1>
        <fieldset className='profile__fieldset'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='name'
              id='name'
              value={values.name}
              minLength={2}
              maxLength={40}
              required
              onChange={handleChange}
            />
            <span className='profile__error'>{errors.name}</span>
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              type='email'
              name='email'
              id='email'
              value={values.email}
              minLength={2}
              required
              onChange={handleChange}
            />
            <span className='profile__error'>{errors.email}</span>
          </label>
        </fieldset>
        <fieldset className='profile__fieldset profile__fieldset_content_buttons'>
          <button
            type='submit'
            className='profile__button profile__button_action_edit'
            disabled={!isValid}
          >
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
