import { FilterCont, FilterTitle, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setContactFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = evt => {
    dispatch(setContactFilter(evt.target.value));
  };

  return (
    <FilterCont>
      <label htmlFor="filter">
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput
          placeholder="P..."
          name="filter"
          type="text"
          id="filter"
          value={filter}
          onChange={onFilter}
        />
      </label>
    </FilterCont>
  );
};

export default Filter;
