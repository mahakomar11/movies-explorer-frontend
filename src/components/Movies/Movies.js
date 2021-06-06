import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
  const { onSearch, moviesList, savedMoviesList, onMovieSave, onMovieDelete, message } = props;

  return (
    <>
      <Header isLogined={true} />
      <SearchForm onSearch={onSearch} />
      <MoviesCardList
        moviesList={moviesList}
        savedMoviesList={savedMoviesList}
        inSaved={false}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
        message={message}
      />
      <Footer />
    </>
  );
}

export default Movies;
