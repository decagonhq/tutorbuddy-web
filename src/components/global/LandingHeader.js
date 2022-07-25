import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthState";

const LandingHeader = () => {
  const {
    state: { userType },
  } = useAuth();

  return (
    <nav className="container px-24">
      <div className="flex py-6 justify-between z-10 absolute items-center container">
        <img
          src="/images/logo2.png"
          className="w-[160px] md:w-[205px]"
          alt="logo"
        />
        <div className="flex items-center">
          <Link to="/dashboard" className="mr-[39px] text-pry2 hidden md:block">
            Tutors
          </Link>
          <Link
            to="#"
            className="mr-[39px] text-pry2 hidden md:block border-r pr-8"
          >
            About Us
          </Link>
          <Link to="/login" className="mr-[39px] text-pry2 hidden md:block">
            Login
          </Link>
          <Link
            to={userType === "tutor" ? "/tutor/signup" : "/student/signup"}
            className="mr-[39px] text-pry2 hidden md:block"
          >
            <input
              className="text-pry2 bg-[#FD2959] w-[125px] h-[48px] rounded cursor-pointer"
              value="Get Started"
              type="button"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingHeader;
