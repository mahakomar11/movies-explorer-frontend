import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const {onSearch, moviesList} = props;
  
  return (
    <>
      <Header isLogined={true} />
      <SearchForm onSearch={onSearch}/>
      <MoviesCardList moviesCards={moviesList} inSaved={true} />
      <Footer />
    </>
  );
}

export default SavedMovies;
