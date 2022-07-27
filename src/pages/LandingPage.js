import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthState";
import LandingHeader from "../components/global/LandingHeader";
import Footer from "../components/global/Footer";

const LandingPage = () => {
  const {
    state: { userType },
  } = useAuth();

  return (
    <>
      <div className="h-screen">
        <LandingHeader />
        <img
          src="/images/landing-img.png"
          className="absolute w-full h-screen"
          alt="landing page"
        />
        <div className="absolute w-full h-full bg-opac opacity-100"></div>
        <div className="z-10 absolute flex justify-between top-[250px] left-[90px] flex-col">
          <h1 className="text-[55px] text-pry2 font-extrabold">
            Find the best online
            <br /> tutor for you.
          </h1>
          <p className="text-pry2 my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. id nisi dui
            <br />
            Ulterior ipsum dolor sit amet, consectetur adip sed
          </p>
          <Link to="/dashboard">
            <input
              className="text-pry2 bg-[#FD2959] w-[233px] h-[48px] rounded cursor-pointer"
              value="Get Started"
              type="button"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
