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
        {moviesCards.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
