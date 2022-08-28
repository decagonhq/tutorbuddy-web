import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthState";
import { loginUser } from "../api/api";
import Error from "../components/Error";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState({ emailAddress: "", password: "" });
  const { state, userIsLoginedIn, dispatch } = useAuth();
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (error.length > 0) {
      setError([]);
    }

    const loginResponse = await loginUser(user);
    if (loginResponse.response) {
      const { data } = loginResponse.response;
      if (!data.success && data.message) {
        setError((prev) => [...prev, data.message]);
      } else if (data.errors) {
        const dataErrors = Object.keys(data.errors);
        dataErrors.forEach((error) => {
          setError((prev) => [...prev, ...data.errors[error]]);
        });
      }
      return;
    }
    const { data } = loginResponse;
    localStorage.setItem("userToken", JSON.stringify(data.data));
    const { token } = data.data;
    let key = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    let decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded[key].toLowerCase() === "student") {
      navigate("/learn");
    } else {
      navigate("/tutor_dashboard");
    }
  };
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div>
            <img src="/images/logo.svg" className="mx-auto" alt="logo" />
          </div>
          <div className="bg-white mt-5 md:mt-10 py-6 md:py-16">
            <form
              className="md:w-2/4 px-6 mx-auto text-sm"
              onSubmit={handleSubmit}
            >
              <h3 className="mb-10 text-lg font-bold">Login</h3>
              <div>
                <label>Email</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="email"
                  name="emailAddress"
                  value={user.emailAddress}
                  placeholder="Enter your email"
                  onChange={handleUserInput}
                />
              </div>
              <div className="mt-4 mb-2">
                <label>Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Enter your Password"
                  onChange={handleUserInput}
                />
              </div>
              <Link className="text-[#17A1FA]" to="/forgot-password">
                Forgot password?
              </Link>
              <button className="text-sm block bg-pry w-full py-3 text-white my-6">
                Login
              </button>
              <Error error={error} />
            </form>
            <div className="text-center mt-10">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-pry">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
