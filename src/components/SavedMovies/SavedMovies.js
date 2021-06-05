import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const { onSearch, savedMoviesList, onMovieDelete } = props;

  return (
    <>
      <Header isLogined={true} />
      <SearchForm onSearch={onSearch} />
      <SavedMoviesCardList
        savedMoviesList={savedMoviesList}
        inSaved={true}
        onMovieDelete={onMovieDelete}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
