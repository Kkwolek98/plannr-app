import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/useAuthContext";

type GuardedRouteProps = {
  children: ReactNode;
};

export default function GuardedRoute({ children }: GuardedRouteProps) {
  const { getToken } = useAuthContext();
  const token = getToken();
  return token ? children : <Navigate to="/login" />;
}
