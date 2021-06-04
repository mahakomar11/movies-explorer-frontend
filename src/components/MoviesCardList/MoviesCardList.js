import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList(props) {
  const { moviesList, savedMoviesList, inSaved, onMovieSave, onMovieDelete } = props;
  if (moviesList.length === 0)
    return (
      <section className='movies-list'>
        <p className='movies-list__message'>Фильмы не найдены</p>
      </section>
    );

  return (
    <section className='movies-list'>
      <ul className='movies-list__grid'>
        {moviesList.slice(0, 12).map((movie) => (
          <MovieCard
            movie={movie}
            inSaved={inSaved}
            isSaved={savedMoviesList.some((savedMovie) => savedMovie.movieId === movie.id)}
            key={movie.id}
            onSave={onMovieSave}
            onDelete={onMovieDelete}
          />
        ))}
      </ul>
      {moviesList.length > 12 ? (
        <button className='movies-list__button'>Ещё</button>
      ) : (
        <div className='movies-list__filler'></div>
      )}
    </section>
  );
}

export default MoviesCardList;
