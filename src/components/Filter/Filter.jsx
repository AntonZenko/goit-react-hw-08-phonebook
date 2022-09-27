import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../redux/filter';
import { changeFilter } from '../redux/filter/filter-slice';

function Filter() {
  const inputId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const handleChange = e => {
    dispatch(changeFilter(e));
  };

  return (
    <>
      <Label htmlFor={inputId}>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={event => handleChange(event.target.value)}
      />
    </>
  );
}

export default Filter;
