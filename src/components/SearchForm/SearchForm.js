import './SearchForm.css';

function SearchForm() {
  return (
    <form className='search-form'>
      <fieldset className='search-form__fieldset sign-form__fieldset_for_search'>
        <input
          placeholder='Фильм'
          className='search-form__input'
          name='movie'
          type='text'
          required
        />
        <button className='search-form__button' type='submit'></button>
      </fieldset>
      <fieldset className='search-form__fieldset sign-form__fieldset_for_checkbox'>
        <label className='search-form__switch'>
          <input
            className='search-form__checkbox'
            type='checkbox'
            name='is-short'
          />
          <span className='search-form__slider'></span>
        </label>
        <p className='search-form__checkbox-message'>Короткометражки</p>
      </fieldset>
    </form>
  );
}

export default SearchForm;
