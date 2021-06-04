import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const { onSearch, moviesList, savedMoviesList, onMovieDelete } = props;

  const moviesToDisplay = moviesList.filter((movie) =>
    savedMoviesList.some((savedMovie) => savedMovie.movieId === movie.id)
  );

  return (
    <>
      <Header isLogined={true} />
      <SearchForm onSearch={onSearch} />
      <MoviesCardList
        moviesList={moviesToDisplay}
        savedMoviesList={savedMoviesList}
        inSaved={true}
        onMovieDelete={onMovieDelete}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
