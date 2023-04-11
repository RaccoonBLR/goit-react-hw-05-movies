import PropTypes from 'prop-types';

export const CastList = ({ castInfo }) => (
  <ul>
    {castInfo.map(({ cast_id, profile_path, name, character }) => {
      const profileImage = profile_path
        ? `https://image.tmdb.org/t/p/w500${profile_path}`
        : '';

      return (
        <li key={cast_id}>
          <img src={profileImage} alt={name} />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      );
    })}
  </ul>
);

CastList.propTypes = {
  castInfo: PropTypes.array.isRequired,
};
