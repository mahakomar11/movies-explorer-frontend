import '../MoviesCardList/MoviesCardList';
import MovieCard from '../MovieCard/MovieCard';

function SavedMoviesCardList(props) {
  const { savedMoviesList, onMovieDelete, message } = props;

  return (
    <section className='movies-list'>
      <ul className='movies-list__grid'>
        {savedMoviesList.map((movie) => {
          const movieCard = {
            ...movie,
            id: movie.movieId,
            nameRU: movie.nameRU,
            image: movie.image,
            trailer: movie.trailer,
            duration: movie.duration
          };

          return (
            <MovieCard
              movie={movieCard}
              inSaved={true}
              isSaved={true}
              key={movieCard.id}
              onDelete={onMovieDelete}
            />
          );
        })}
      </ul>
      <div className='movies-list__filler'>
        <p className='movies-list__message'>{message}</p>
      </div>
    </section>
  );
}

export default SavedMoviesCardList;
