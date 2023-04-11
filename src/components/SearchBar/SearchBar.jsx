export const SearchBar = ({ value, setParams }) => {
  const onChange = ({ target: { value } }) =>
    value ? setParams({ query: value }) : setParams({});

  return <input type="text" value={value} onChange={onChange} />;
};
