import cover from './cover.svg';

let moviesCards = Array(12).fill({
  name: 'В погоне за Бэнкси',
  duration: '27минут',
  isSaved: false,
  image: cover,
});

moviesCards.unshift({
  name: 'В погоне за Бэнкси',
  duration: '27минут',
  isSaved: true,
  image: cover,
});

const savedMoviesCards = [
  {
    name: 'В погоне за Бэнкси',
    duration: '27минут',
    image: cover,
  },
];

export { moviesCards, savedMoviesCards };
