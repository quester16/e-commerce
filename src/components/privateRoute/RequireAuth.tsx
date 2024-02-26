import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.ts";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
