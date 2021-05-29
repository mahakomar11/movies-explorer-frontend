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
      <div className='sign-form__block'>
        {props.place === 'signup' && (
          <>
            <label className='sign-form__label' for='name'>
              Имя
            </label>
            <input
              name='name'
              type='text'
              id='name'
              className='sign-form__input'
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
          name='email'
          type='email'
          id='email'
          className='sign-form__input'
          minLength={2}
          required
        />
        <span className='sign-form__error-message' id='email-error'></span>
        <label className='sign-form__label' for='password'>
          Пароль
        </label>
        <input
          name='password'
          type='password'
          id='password'
          className='sign-form__input'
          minLength={8}
          required
        />
        <span className='sign-form__error-message' id='password-error'></span>
      </div>
      <div className='sign-form__block'>
        <button type='submit' className='sign-form__button'>
          {props.place === 'signup' ? 'Зарегистрироваться' : 'Войти'}
        </button>
        <p className='sign-form__message'>
          {message}
          {link}
        </p>
      </div>
    </form>
  );
}

export default SignForm;
