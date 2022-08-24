import { useRef, useState } from "react";
import ReactCodeInput from "react-code-input";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const ResetPassword = () => {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);
  const [error, setError] = useState("");

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode);
    setBtnIsPressed(false);
    setError("");
  };

  const email = localStorage.getItem("email");

  console.log("EMAIL", email);

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        "Auth/reset-password",
        JSON.stringify({
          emailAddress: email,
          token: pinCode,
          newPassword: passwordRef.current.value,
          confirmPassword: confirmPasswordRef.current.value,
        }),
        {
          headers: { "Content-Type": "application/json", accept: "*/*" },
        }
      );
      navigate("/login");
    } catch (error) {
        console.log("ERROR", error)
      setError(error?.response?.data?.title);
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
            <form onSubmit={handleReset} className="md:w-2/4 px-6 mx-auto text-sm">
              <h3 className="text-lg font-bold">Reset Password</h3>
              <p className="mb-10">Please choose your new password</p>
              <div className="mb-8">
                <ReactCodeInput
                  id="pinCode"
                  type="password"
                  isValid={isPinCodeValid}
                  fields={4}
                  onChange={handlePinChange}
                  value={pinCode}
                />
              </div>
              <div>
                <label>New Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2"
                  type="password"
                  placeholder="Enter your email"
                  ref={passwordRef}
                />
              </div>
              <div className="mt-4 mb-2">
                <label>Confirm Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2"
                  type="password"
                  placeholder="Enter your email"
                  ref={confirmPasswordRef}
                />
              </div>
              <button className="text-sm block bg-pry w-full py-3 text-white mt-6">
                Reset Password
              </button>
              <div className="text-center text-pry mt-4">{error}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
