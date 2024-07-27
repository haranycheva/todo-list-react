import { useSelector } from "react-redux";
import { selectorIsLogged } from "./redux/authSelectors";
import { Navigate } from "react-router-dom";

export const BoundingRoute = ({component: Component, redirect}) => {
    const logged = useSelector(selectorIsLogged)
    return logged ?  <Navigate to={redirect}/> : <Component/>
};
