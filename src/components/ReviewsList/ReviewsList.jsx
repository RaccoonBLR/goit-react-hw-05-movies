export const ReviewsList = ({ reviewsInfo }) => (
  <ul>
    {reviewsInfo.length
      ? reviewsInfo.map(({ id, author_details: { username }, content }) => (
          <li key={id}>
            <h2>Author: {username}</h2>
            <p>{content}</p>
          </li>
        ))
      : `We don't have any reviews for this movie.`}
  </ul>
);
