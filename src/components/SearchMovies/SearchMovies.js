import React from 'react';
import filterMovies from '../../utils/filter';

function useSearchMovies(movies, searchParams) {
  const [result, setResult] = React.useState({
    foundMovies: [],
    resultMessage: '',
  });

  React.useEffect(() => {
    if ((searchParams === undefined) | (movies.length === 0)) return;

    const foundMovies = filterMovies(
      movies,
      searchParams.keyword,
      searchParams.isShort
    );
    const resultMessage = foundMovies.length === 0 ? 'Ничего не найдено' : '';

    setResult({ foundMovies, resultMessage });
  }, [movies, searchParams]);

  return [result, setResult];
}

export default useSearchMovies;
