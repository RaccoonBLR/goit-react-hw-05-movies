import { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'services/APIService';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';
import debounce from 'lodash.debounce';

const Movies = () => {
  const [requestedMovies, setRequestedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const makeRequest = useMemo(
    () =>
      debounce(query => {
        getSearchedMovies(query).then(setRequestedMovies);
      }, 550),
    []
  );

  useEffect(() => {
    makeRequest(query);
  }, [makeRequest, query]);

  const onChange = evt => {
    const { value } = evt.target;
    value ? setSearchParams({ query: value }) : setSearchParams({});
  };

  return (
    <>
      <PageTitle title={'Search movie'} />
      <SearchBar value={query} onChange={onChange} />
      <MovieList location={location} movies={requestedMovies} />
    </>
  );
};

export default Movies;
