import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ location, movies }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  location: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};
