import PropTypes from 'prop-types';
import { usePhonebook } from 'providers/PhonebookProvider';

const Filter = () => {
const { handleFilter } = usePhonebook();

return (
  <label>
    Find contacts by name
    <input type="filter" name="filter" onChange={handleFilter} />
  </label>
)};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}