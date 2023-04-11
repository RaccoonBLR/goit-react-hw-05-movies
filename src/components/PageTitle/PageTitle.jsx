import PropTypes from 'prop-types';

export const PageTitle = ({ title }) => <h1>{title}</h1>;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
