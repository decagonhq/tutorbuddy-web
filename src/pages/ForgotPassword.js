import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/api";
import Error from "../components/Error";

const ForgotPassword = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleEmailSet = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error.length > 0) {
      setError([]);
    }
    const submitEmail = await forgotPassword({ emailAddress });
    console.log(submitEmail);
    if (submitEmail.response) {
      const { data } = submitEmail.response;
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
    if (submitEmail.data && submitEmail.data.success) {
      navigate("/password_recover");
    } else {
      setError(["Please fill in your Email"]);
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
              <h3 className="text-lg font-bold">Forgot Password?</h3>
              <p className="mb-10">
                Send a Link to your email to reset your password.
              </p>
              <div>
                <label>Email</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="email"
                  name="emailAddress"
                  value={emailAddress}
                  placeholder="Enter your email"
                  onChange={handleEmailSet}
                />
              </div>
              <button className="text-sm block bg-pry w-full py-3 text-white mt-6">
                Send Reset Link
              </button>
              <Error error={error} />
            </form>
            <div className="text-center mt-10">
              Already have an account?{" "}
              <Link to="/login" className="text-[#17A1FA]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
