import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div>
            <img src="/images/logo.svg" className="mx-auto" alt="logo" />
          </div>
          <div className="flex flex-col items-center bg-white mt-5 md:mt-10 p-6 md:py-16">
            <div>
              <img src="./images/check-email.png" alt="check your email" />
            </div>
            <h2 className="text-xl py-4 font-bold">Check your mail</h2>
            <p>We have sent a password recover instruction to your account</p>
            <Link to="/reset-password">
              <button className="text-sm block bg-pry w-full p-3 text-white mt-6">
                Reset Password
              </button>
            </Link>
          </div>
          <p className="flex flex-col items-center mt-5 md:mt-10 p-6 md:py-16">
            Did not receive the email? Check your spam filter, or{" "}
            <Link to="/forgot-password" className="text-pry font-bold">
              resend instruction
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
