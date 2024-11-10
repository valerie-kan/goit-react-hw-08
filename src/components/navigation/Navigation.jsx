import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";

const linkClasses = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <NavLink className={linkClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={linkClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};
