import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { selectorIsLogged } from "../redux/authSelectors";
import { logout } from "../redux/oparations";

export const Layout = () => {
  const isUserLogged = useSelector(selectorIsLogged);
  const dispatch = useDispatch();
  const handleLodout = (e) => {
    dispatch(logout());
  };
  return (
    <>
      {isUserLogged ? (
        <>
          <button onClick={handleLodout}>logout</button>
          <ul>
            <li>
              <Link to="todo">todo list</Link>
            </li>
            <li>
              <Link to="createTodo">create your own todo</Link>
            </li>
          </ul>{" "}
        </>
      ) : (
        <ul>
          <li>
            <Link to="login">login</Link>
          </li>
          <li>
            <Link to="registration">sing up</Link>
          </li>
        </ul>
      )}
      <Outlet />
    </>
  );
};
