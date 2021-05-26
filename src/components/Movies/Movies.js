import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <Header isLogined={true}/>
            <SearchForm />
            <Footer />
        </>
    )
}

export default Movies;