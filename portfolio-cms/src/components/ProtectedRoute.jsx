import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useContext(AuthContext);

  // Check if the user is authenticated and is an admin
  if (!token || !user?.isAdmin) {
    // Redirect to login page if not authenticated or not an admin
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if authenticated and authorized
  return children;
};

export default ProtectedRoute;