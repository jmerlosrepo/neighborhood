import { Navigate, Outlet } from "react-router-dom";

/// TODO reemplaza con tu lógica real de autenticación
const useUser = () => undefined;

function AuthorizedUsers() {
  const user = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default AuthorizedUsers;
