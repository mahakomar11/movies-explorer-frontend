import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
  const {onSearch, moviesList} = props;

  return (
    <>
      <Header isLogined={true} />
      <SearchForm onSearch={onSearch}/>
      <MoviesCardList moviesCards={moviesList} inSaved={false}/>
      <Footer />
    </>
  );
}

export default Movies;
