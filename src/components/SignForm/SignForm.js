import './SignForm.css';
import { Link } from 'react-router-dom';

function SignForm(props) {
  const message =
    props.place === 'signup'
      ? 'Уже зарегистрированы? '
      : 'Ещё не зарегистрированы? ';

  const link =
    props.place === 'signup' ? (
      <Link to='/signin' className='sign-form__link'>
        Войти
      </Link>
    ) : (
      <Link to='/signup' className='sign-form__link'>
        Регистрация
      </Link>
    );

  return (
    <form className='sign-form'>
      <fieldset className='sign-form__fieldset'>
        {props.place === 'signup' && (
          <>
            <label className='sign-form__label' for='name'>
              Имя
            </label>
            <input
              className='sign-form__input'
              type='text'
              name='name'
              id='name'
              minLength={2}
              maxLength={40}
              required
            />
            <span className='sign-form__error-message' id='name-error'></span>
          </>
        )}
        <label className='sign-form__label' for='email'>
          E-mail
        </label>
        <input
          className='sign-form__input'
          type='email'
          name='email'
          id='email'
          minLength={2}
          required
        />
        <span className='sign-form__error-message' id='email-error'></span>
        <label className='sign-form__label' for='password'>
          Пароль
        </label>
        <input
          className='sign-form__input'
          type='password'
          name='password'
          id='password'
          minLength={8}
          required
        />
        <span className='sign-form__error-message' id='password-error'></span>
      </fieldset>
      <fieldset className='sign-form__fieldset'>
        <button className='sign-form__button' type='submit'>
          {props.place === 'signup' ? 'Зарегистрироваться' : 'Войти'}
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
