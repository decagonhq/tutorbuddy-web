import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div>
            <img src="/images/logo.svg" className="mx-auto" alt="logo" />
          </div>
          <div className="bg-white mt-5 md:mt-10 py-6 md:py-16">
            <form className="md:w-2/4 px-6 mx-auto text-sm">
              <h3 className="mb-10 text-lg font-bold">Login</h3>
              <div>
                <label>Email</label>
                <input
                  className="block border w-full mt-2 py-3 px-2"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 mb-2">
                <label>Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2"
                  type="password"
                  placeholder="Enter your email"
                />
              </div>
              <Link className="text-[#17A1FA]" to="/forgot-password">
                Forgot password?
              </Link>
              <Link to="/dashboard">
                <button className="text-sm block bg-pry w-full py-3 text-white mt-6">
                  Login
                </button>
              </Link>
            </form>

            <div className="text-center mt-10">
              Don’t have an account?{" "}
              <Link to="/student/signup" className="text-pry">
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
