import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

///TODO reemplaza esta función con tu lógica real de autenticación
const useUser = () => undefined;

type AuthRedirectProps = {
  children: ReactElement;
};

function AuthRedirect({ children }: AuthRedirectProps) {
  const user = useUser();

  if (user) {
    return <Navigate to="/logout" replace />;
  }

  return children;
}

export default AuthRedirect;
