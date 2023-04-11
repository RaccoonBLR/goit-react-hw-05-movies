import { Link } from 'react-router-dom';

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
