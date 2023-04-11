import PropTypes from 'prop-types';

export const ReviewsList = ({ reviewsInfo }) =>
  reviewsInfo.length ? (
    <ul>
      {reviewsInfo.map(({ id, author_details: { username }, content }) => (
        <li key={id}>
          <h2>Author: {username}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <div>`We don't have any reviews for this movie.`</div>
  );

ReviewsList.propTypes = {
  reviewsInfo: PropTypes.array.isRequired,
};
