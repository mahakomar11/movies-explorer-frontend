import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesCards } from '../../temporary/moviesCards';

function Movies() {
  return (
    <>
      <Header isLogined={true} />
      <SearchForm />
      <MoviesCardList moviesCards={moviesCards} inSaved={false}/>
      <Footer />
    </>
  );
}

export default Movies;
