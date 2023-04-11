import PropTypes from 'prop-types';

export const SearchBar = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
