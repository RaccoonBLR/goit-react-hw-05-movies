import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/APIService';
import { CastList } from 'components/CastList/CastList';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCastInfo);
  }, [movieId]);

  return <>{castInfo && <CastList castInfo={castInfo} />}</>;
};
