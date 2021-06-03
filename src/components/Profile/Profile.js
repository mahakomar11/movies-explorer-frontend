import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile(props) {
  const { onLogout, onSubmit } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleEdit() {
    document.querySelectorAll('.profile__input').forEach((el) => {
      el.disabled = false;
    });
    document
      .querySelector('.profile__label')
      .classList.add('profile__label_editable');
    document
      .querySelector('.profile__button_action_edit')
      .classList.add('profile__button_disabled');
    document
      .querySelector('.profile__button_action_save')
      .classList.remove('profile__button_disabled');
  }

  function handleSubmit(e) {
    e.preventDefault();
    document.querySelectorAll('.profile__input').forEach((el) => {
      el.disabled = true;
    });
    document
      .querySelector('.profile__label')
      .classList.remove('profile__label_editable');
    document
      .querySelector('.profile__button_action_edit')
      .classList.remove('profile__button_disabled');
    document
      .querySelector('.profile__button_action_save')
      .classList.add('profile__button_disabled');
    onSubmit({name, email})
  }

  return (
    <section className='profile'>
      <Header isLogined={true} />
      <form className='profile__form'>
        <h1 className='profile__greetings'>Привет, {name}!</h1>
        <fieldset className='profile__fieldset'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='name'
              id='name'
              value={name}
              minLength={2}
              maxLength={40}
              required
              disabled
              onChange={handleNameChange}
            />
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              type='email'
              name='email'
              id='email'
              value={email}
              minLength={2}
              required
              disabled
              onChange={handleEmailChange}
            />
          </label>
        </fieldset>
        <fieldset className='profile__fieldset profile__fieldset_content_buttons'>
          <button
            type='button'
            className='profile__button profile__button_action_edit'
            onClick={handleEdit}
          >
            Редактировать
          </button>
          <button
            type='submit'
            className='profile__button profile__button_action_save profile__button_disabled'
            onClick={handleSubmit}
          >
            Сохранить
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
