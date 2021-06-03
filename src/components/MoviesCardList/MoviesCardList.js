import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList(props) {
  const { moviesCards, inSaved, onMovieSave } = props;
  if (moviesCards.length === 0)
    return (
      <section className='movies-list'>
        <p className='movies-list__message'>Фильмы не найдены</p>
      </section>
    );

  return (
    <section className='movies-list'>
      <ul className='movies-list__grid'>
        {moviesCards.slice(0, 12).map((movie) => (
          <MovieCard movie={movie} inSaved={inSaved} key={movie.id} onSave={onMovieSave}/>
        ))}
      </ul>
      {moviesCards.length > 12 ? (
        <button className='movies-list__button'>Ещё</button>
      ) : (
        <div className='movies-list__filler'></div>
      )}
    </section>
  );
}

export default MoviesCardList;
