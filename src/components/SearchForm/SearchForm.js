import React from 'react';
import './SearchForm.css';
import { useFormWithValidation } from '../FormWithValidation/FormWithValidation';

function SearchForm(props) {
  const { onSearch } = props;

  const { values, handleChange, handleSubmit } = useFormWithValidation(
    { keyword: '', isShort: false },
    { keyword: '', isShort: '' },
    onSearch
  );

  function handleValid(e) {
    e.preventDefault();
    document.querySelector('.search-form__error').innerHTML =
      'Нужно ввести ключевое слово';
  }

  return (
    <form
      className='search-form'
      onSubmit={handleSubmit}
      onInvalid={handleValid}
    >
      <fieldset className='search-form__fieldset sign-form__fieldset_for_search'>
        <input
          placeholder='Фильм'
          className='search-form__input'
          type='text'
          name='keyword'
          value={values.keyword}
          required
          onChange={handleChange}
        />
        <button className='search-form__button' type='submit'></button>
        <span className='search-form__error'></span>
      </fieldset>
      <fieldset className='search-form__fieldset sign-form__fieldset_for_checkbox'>
        <label className='search-form__switch'>
          <input
            className='search-form__checkbox'
            type='checkbox'
            name='isShort'
            checked={values.isShort}
            onChange={handleChange}
          />
          <span className='search-form__slider'></span>
        </label>
        <p className='search-form__checkbox-message'>Короткометражки</p>
      </fieldset>
    </form>
  );
}

export default SearchForm;
