import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { filterChanged } from '../../redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterChangeHandler = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterChanged(filterValue));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={filterChangeHandler}
      />
    </div>
  );
};
