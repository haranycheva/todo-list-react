import { useSelector } from "react-redux";
import { selectorIsLogged, selectorIsRefreshed } from "./redux/authSelectors";
import { Navigate } from "react-router-dom";

export const PrivatRoute = ({redirect, component: Component}) => {
    const logged = useSelector(selectorIsLogged)
    const refresh = useSelector(selectorIsRefreshed)
    return logged && !refresh ? <Component/> : <Navigate to={redirect}/>
};