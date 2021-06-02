import React from 'react';
import './SignForm.css';
import { Link } from 'react-router-dom';

function SignForm(props) {
  const { place, onSubmit } = props;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
  }, []);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (place === 'signup') onSubmit({ name, email, password });
    else onSubmit({ email, password });
  }

  const message =
    place === 'signup' ? 'Уже зарегистрированы? ' : 'Ещё не зарегистрированы? ';

  const link =
    place === 'signup' ? (
      <Link to='/signin' className='sign-form__link'>
        Войти
      </Link>
    ) : (
      <Link to='/signup' className='sign-form__link'>
        Регистрация
      </Link>
    );

  return (
    <form className='sign-form' onSubmit={handleSubmit}>
      <fieldset className='sign-form__fieldset'>
        {place === 'signup' && (
          <>
            <label className='sign-form__label' htmlFor='name'>
              Имя
            </label>
            <input
              className='sign-form__input'
              type='text'
              name='name'
              id='name'
              value={name}
              minLength={2}
              maxLength={40}
              required
              onChange={handleNameChange}
            />
            <span className='sign-form__error-message' id='name-error'></span>
          </>
        )}
        <label className='sign-form__label' htmlFor='email'>
          E-mail
        </label>
        <input
          className='sign-form__input'
          type='email'
          name='email'
          id='email'
          value={email}
          minLength={2}
          required
          onChange={handleEmailChange}
        />
        <span className='sign-form__error-message' id='email-error'></span>
        <label className='sign-form__label' htmlFor='password'>
          Пароль
        </label>
        <input
          className='sign-form__input'
          type='password'
          name='password'
          id='password'
          value={password}
          minLength={8}
          required
          onChange={handlePasswordChange}
        />
        <span className='sign-form__error-message' id='password-error'></span>
      </fieldset>
      <fieldset className='sign-form__fieldset'>
        <button className='sign-form__button' type='submit'>
          {place === 'signup' ? 'Зарегистрироваться' : 'Войти'}
        </button>
        <p className='sign-form__message'>
          {message}
          {link}
        </p>
      </fieldset>
    </form>
  );
}

export default SignForm;
