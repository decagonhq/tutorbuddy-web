import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import axios from "../api/axios";

const Verify = () => {
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
  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "Auth/verify-email",
        JSON.stringify({
          emailAddress: email,
          token: pinCode,
        }),
        {
          headers: { "Content-Type": "application/json", accept: "*/*" },
        }
      );
      navigate("/login");
    } catch (error) {
      setError(error?.response?.data?.message);
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
            <form className="md:w-2/4 px-6 mx-auto text-sm">
              <h3 className="mb-10 text-lg font-bold">Verify Account</h3>
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
                Didn't get the code?{" "}
                <span className="text-[#17A1FA]">Resend code</span>
              </div>
              <button
                className="text-sm block bg-pry w-full py-3 text-white mt-6"
                onClick={handleVerify}
              >
                Verify
              </button>
              <div className="mt-2 text-center text-pry text-bold">{error}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
