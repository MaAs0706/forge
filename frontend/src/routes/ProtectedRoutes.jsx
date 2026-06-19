import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function RequireAuth({ children }) {
  const { user } = useAuth();
  // FIXED: If user signs out, seamlessly redirect to the root landing page
  return user ? children : <Navigate to="/" replace />;
}

export function RejectAuth({ children }) {
  const { user } = useAuth();
  // If user is already logged in, prevent them from accessing landing/login
  return user ? <Navigate to="/dashboard" replace /> : children;
}