import cover from './cover.svg';

let moviesCards = Array(11).fill({
  name: 'В погоне за Бэнкси',
  duration: '27минут',
  isSaved: false,
  image: cover,
});

// moviesCards.unshift({
//   name: 'В погоне за Бэнкси',
//   duration: '27минут',
//   isSaved: true,
//   image: cover,
// });

const savedMoviesCards = Array(3).fill(
  {
    name: 'В погоне за Бэнкси',
    duration: '27минут',
    isSaved: true,
    image: cover,
  },
);

moviesCards = [...savedMoviesCards, ...moviesCards];

export { moviesCards, savedMoviesCards };
