import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.searchBox}>
      <span style={{ fontSize: "17px", marginBottom: "5px" }}>
        Find contacts by name or number
      </span>
      <input
        className={css.searchInp}
        type="text"
        name="filter"
        value={filter}
        onChange={(evt) => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;
