import { Suspense } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieInfo = ({ data, location }) => {
  const { poster_path, title, release_date, vote_average, overview } = data;
  const genres =
    data.genres.map(({ name }) => name).join(', ') ?? 'no info about genres';

  return (
    <>
      <Link to={location.current}>Go Back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={poster_path}
      />
      <h1>
        {title} ({parseInt(release_date)})
      </h1>
      <p>User Score: {vote_average.toFixed(2)}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <div>
        Additional information
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieInfo.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  location: PropTypes.object,
};
