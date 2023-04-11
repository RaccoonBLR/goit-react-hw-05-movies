import { getMovieDetails } from 'services/APIService';
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieInfo);
  }, [movieId]);

  return (
    <>
      {movieInfo && (
        <MovieInfo data={movieInfo} location={backLinkLocationRef} />
      )}
    </>
  );
};

export default MovieDetails;
