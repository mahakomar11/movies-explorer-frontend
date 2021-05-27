import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { savedMoviesCards } from '../../temporary/moviesCards';

function SavedMovies() {
  return (
    <>
      <Header isLogined={true} />
      <SearchForm />
      <MoviesCardList moviesCards={savedMoviesCards} inSaved={true} />
      <Footer />
    </>
  );
}

export default SavedMovies;
