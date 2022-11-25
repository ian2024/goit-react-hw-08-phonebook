import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "redux/selector"

export const PrivateRoute = () => {
    const token = useSelector(getToken);
    return token ? <Outlet /> : <Navigate to='/login' />;
};