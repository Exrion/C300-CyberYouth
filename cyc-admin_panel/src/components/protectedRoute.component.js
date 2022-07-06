import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="./login/login.component.js" />;
  }

  return (
    <div>
      <Navigate to="./dashboard.component.js" />;{outlet}
    </div>
  );
};
