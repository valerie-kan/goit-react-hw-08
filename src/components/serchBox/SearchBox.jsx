import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const filterWord = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.searchBox}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInp}
        type="text"
        name="filter"
        value={filterWord}
        onChange={(evt) => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;
