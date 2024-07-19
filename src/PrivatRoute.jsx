import { useSelector } from "react-redux";
import { isLogged, isRefreshed } from "./redux/authSelectors";
import { Navigate } from "react-router-dom";

export const PrivatRoute = ({redirect, component: Component}) => {
    const logged = useSelector(isLogged)
    const refresh = useSelector(isRefreshed)
    return logged && !refresh ? <Component/> : <Navigate to={redirect}/>
};