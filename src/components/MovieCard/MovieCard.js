import './MovieCard.css';

function MovieCard(props) {
  const { movie, inSaved, onSave } = props;
  function handleDelete(e) {
    console.log(movie);
  }

  function handleSave() {
    console.log(movie);
    onSave(movie);
  }

  return (
    <li className='movie'>
      <div className='movie__info'>
        <h2 className='movie__name' title={movie.nameRU}>
          {movie.nameRU}
        </h2>
        <p className='movie__duration'>{movie.duration} мин</p>
      </div>
      <a
        className='movie__trailer-link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movie__image'
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={`Обложка фильма ${movie.nameRU}`}
        ></img>
        <div className='movie__overlay'></div>
      </a>
      {inSaved ? (
        <button
          className='movie__button movie__button_insaved'
          onClick={handleDelete}
        ></button>
      ) : movie.isSaved ? (
        <button
          className='movie__button movie__button_saved_yes'
          onClick={handleDelete}
        ></button>
      ) : (
        <button
          className='movie__button movie__button_saved_no'
          onClick={handleSave}
        >
          Сохранить
        </button>
      )}
    </li>
  );
}

export default MovieCard;
