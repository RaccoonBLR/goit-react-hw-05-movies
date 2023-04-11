import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/APIService';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviewsInfo);
  }, [movieId]);

  return <ReviewsList reviewsInfo={reviewsInfo} />;
};

export default Reviews;
