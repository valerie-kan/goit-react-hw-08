import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const linkClasses = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AuthNav = () => {
  return (
    <div className={css.authCont}>
      <NavLink className={linkClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClasses} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
