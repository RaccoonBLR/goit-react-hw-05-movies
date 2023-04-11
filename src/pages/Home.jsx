import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/APIService';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <>
      <PageTitle title={'Trending today'} />
      <MovieList location={location} movies={trendingMovies} />
    </>
  );
};

export default Home;
