import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import moviesCards from '../../temporary/moviesCards';

function MoviesCardList() {
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
          <MovieCard movie={movie} />
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
