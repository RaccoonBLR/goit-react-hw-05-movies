import { Link } from 'react-router-dom';
import { PageTitle } from 'components/PageTitle/PageTitle';

const NotFound = () => (
  <>
    <PageTitle title={'Sorry, page not found'} />
    <Link to={'/'}>back to home page</Link>
  </>
);

export default NotFound;
