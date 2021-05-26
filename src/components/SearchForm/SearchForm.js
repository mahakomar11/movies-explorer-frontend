import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <input placeholder='Фильм' className='search-form__input'></input>
        <button className='search-form__button'></button>
      </div>
    </section>
  );
}

export default SearchForm;
