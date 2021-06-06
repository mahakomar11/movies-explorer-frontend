import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  const {
    moviesList,
    savedMoviesList,
    inSaved,
    onMovieSave,
    onMovieDelete,
    message,
  } = props;

  const [moviesToDisplay, setMoviesToDisplay] = React.useState([]);
  const [cardsInRow, setCardsInRow] = React.useState(0);
  const [cardsOnDisplay, setCardsOnDisplay] = React.useState(0);

  // Set number of cards on display depends on screen width
  function calculateCardsOnDisplay(screenWidth) {
    if (screenWidth > 768) {
      setCardsOnDisplay(12);
    } else if (screenWidth > 540) {
      setCardsOnDisplay(8);
    } else {
      setCardsOnDisplay(5);
    }
  }

  // Set number of cards to load by more button
  function calculateCardsInRow(moviesList) {
    if (moviesList.length !== 0) {
      const gridStyle = window.getComputedStyle(
        document.querySelector('.movies-list__grid')
      );
      setCardsInRow(
        gridStyle.getPropertyValue('grid-template-columns').split(' ').length
      );
    } else {
      setCardsInRow(0);
    }
  }

  React.useEffect(() => {
    calculateCardsOnDisplay(window.screen.width);
    calculateCardsInRow(moviesList);
    window.addEventListener('resize', () => {
      calculateCardsOnDisplay(window.screen.width);
      calculateCardsInRow(moviesList);
    });
  }, [moviesList]);

  React.useEffect(() => {
    setMoviesToDisplay(moviesList.slice(0, cardsOnDisplay));
  }, [moviesList, cardsOnDisplay]);

  function handleMoreMovies() {
    setMoviesToDisplay([
      ...moviesToDisplay,
      ...moviesList.slice(
        moviesToDisplay.length,
        moviesToDisplay.length + cardsInRow
      ),
    ]);
  }

  if (moviesList.length === 0)
    return (
      <section className='movies-list'>
        <div className='movies-list__filler'>
          <Preloader />
          {message}
        </div>
      </section>
    );

  return (
    <section className='movies-list'>
      <ul className='movies-list__grid'>
        {moviesToDisplay.map((movie) => {
          const movieCard = {
            ...movie,
            id: movie.id,
            nameRU: movie.nameRU,
            image: movie.image
              ? `https://api.nomoreparties.co${movie.image.url}`
              : 'https://kknd26.ru/images/no_photo.png',
            trailer: movie.trailerLink,
            duration: movie.duration,
            thumbnail: movie.image
              ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
              : '',
          };

          return (
            <MovieCard
              movie={movieCard}
              inSaved={inSaved}
              isSaved={savedMoviesList.some(
                (savedMovie) => savedMovie.movieId === movieCard.id
              )}
              key={movieCard.id}
              onSave={onMovieSave}
              onDelete={onMovieDelete}
            />
          );
        })}
      </ul>
      {moviesList.length > moviesToDisplay.length ? (
        <button className='movies-list__button' onClick={handleMoreMovies}>
          Ещё
        </button>
      ) : (
        <div className='movies-list__filler'></div>
      )}
    </section>
  );
}

export default MoviesCardList;
