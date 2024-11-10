import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <h3>Welcome, {user.name}!</h3>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};
