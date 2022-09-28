import { Field } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../redux/filter';
import { changeFilter } from '../redux/filter/filter-slice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const handleChange = e => {
    dispatch(changeFilter(e));
  };

  return (
    <>
      <Field
        label="Find contacts by name"
        placeholder="Steve Rogers"
        multiline
        variant="standard"
        type="text"
        name="filter"
        value={filter}
        onChange={event => handleChange(event.target.value)}
      />
    </>
  );
}

export default Filter;
