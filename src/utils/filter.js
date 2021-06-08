const filterMovies = (movies, keyword, isShort) => {
  let result = movies.filter((movie) => movie.nameRU.includes(keyword));
  if (isShort) {
    result = result.filter((movie) => movie.duration <= 40);
  }
  return result;
};

export default filterMovies;
