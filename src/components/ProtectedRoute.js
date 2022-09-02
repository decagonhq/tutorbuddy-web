import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthState";

const ProtectedRoute = ({ children }) => {
  const { state } = useAuth();
  const navigate = useNavigate();

  console.log(state);
  if (!state.userLogin) {
    navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
