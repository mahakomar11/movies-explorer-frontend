import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__search-container'>
        <input placeholder='Фильм' className='search-form__input' />
        <button className='search-form__button'></button>
      </div>
      <div className='search-form__checkbox-container'>
        <label className='search-form__switch'>
          <input className='search-form__checkbox' type='checkbox' />
          <span className='search-form__slider'></span>
        </label>
        <p className='search-form__checkbox-message'>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
