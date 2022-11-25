import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "redux/selector"

export const PublicRoute = () => {
    const token = useSelector(getToken);

    return token ? <Navigate to='/' /> : <Outlet />;
};