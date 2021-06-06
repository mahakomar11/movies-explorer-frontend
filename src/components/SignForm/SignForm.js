import React from 'react';
import './SignForm.css';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../ValidationForm/ValidationForm';

function SignForm(props) {
  const { place, onSubmit } = props;

  const initialValues =
    place === 'signup'
      ? { name: '', email: '', password: '' }
      : { email: '', password: '' };

  const initialErrors =
    place === 'signup'
      ? { name: '', email: '', password: '' }
      : { email: '', password: '' };

  const { values, handleChange, errors, isValid } =
    useFormWithValidation(initialValues, initialErrors);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
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
              value={values.name}
              minLength={2}
              maxLength={40}
              required
              onChange={handleChange}
            />
            <span className={`sign-form__error-message`} id='name-error'>
              {errors.name}
            </span>
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
          value={values.email}
          minLength={2}
          required
          onChange={handleChange}
        />
        <span className='sign-form__error-message' id='email-error'>
          {errors.email}
        </span>
        <label className='sign-form__label' htmlFor='password'>
          Пароль
        </label>
        <input
          className='sign-form__input'
          type='password'
          name='password'
          id='password'
          value={values.password}
          minLength={8}
          required
          onChange={handleChange}
        />
        <span className='sign-form__error-message' id='password-error'>
          {errors.password}
        </span>
      </fieldset>
      <fieldset className='sign-form__fieldset'>
        <button className='sign-form__button' type='submit' disabled={!isValid}>
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
