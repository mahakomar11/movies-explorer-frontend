import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const { moviesList, onSearch, onMovieDelete, message } = props;

  return (
    <>
      <Header isLogined={true} />
      <SearchForm onSearch={onSearch} />
      <SavedMoviesCardList
        moviesList={moviesList}
        inSaved={true}
        onMovieDelete={onMovieDelete}
        message={message}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
