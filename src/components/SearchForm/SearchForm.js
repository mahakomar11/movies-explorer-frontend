import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const {onSearch} = props;
  const [keyword, setKeyword] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);

  function handleKeywordChange(e) {
    setKeyword(e.target.value)
  }

  function handleCheckboxChange(e) {
    setIsShort(e.target.checked)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword, isShort);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <fieldset className='search-form__fieldset sign-form__fieldset_for_search'>
        <input
          placeholder='Фильм'
          className='search-form__input'
          type='text'
          name='keyword'
          value={keyword}
          required
          onChange={handleKeywordChange}
        />
        <button className='search-form__button' type='submit'></button>
      </fieldset>
      <fieldset className='search-form__fieldset sign-form__fieldset_for_checkbox'>
        <label className='search-form__switch'>
          <input
            className='search-form__checkbox'
            type='checkbox'
            name='is-short'
            checked={isShort}
            onChange={handleCheckboxChange}
          />
          <span className='search-form__slider'></span>
        </label>
        <p className='search-form__checkbox-message'>Короткометражки</p>
      </fieldset>
    </form>
  );
}

export default SearchForm;
