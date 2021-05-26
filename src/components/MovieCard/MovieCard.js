import './MovieCard.css';

function MovieCard(props) {
  const { movie } = props;
  return (
    <li className='movie'>
      <div className='movie__info'>
        <h2 className='movie__name'>{movie.name}</h2>
        <p className='movie__duration'>{movie.duration}</p>
      </div>
      <img className='movie__image' src={movie.image} alt={`Обложка фильма ${movie.name}`}></img>
      {movie.isSaved ? (
        <button className='movie__button movie__button_saved_yes'></button>
      ) : (
        <button className='movie__button movie__button_saved_no'>
          Сохранить
        </button>
      )}
    </li>
  );
}

export default MovieCard;
