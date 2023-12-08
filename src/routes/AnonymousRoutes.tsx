import { Navigate, Outlet } from "react-router-dom";

const AnonymousRoutes = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <Navigate to="/" replace /> : <Outlet />;
};
export default AnonymousRoutes;
