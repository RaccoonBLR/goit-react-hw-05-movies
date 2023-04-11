import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'services/APIService';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [requestedMovies, setRequestedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    getSearchedMovies(query).then(setRequestedMovies);
  }, [query]);

  return (
    <>
      <PageTitle title={'Search movie'} />
      <SearchBar value={query} setParams={setSearchParams} />
      <MovieList location={location} movies={requestedMovies} />
    </>
  );
};

export default Movies;
