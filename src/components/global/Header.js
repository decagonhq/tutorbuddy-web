import { Link, useLocation } from "react-router-dom";
import TopModal from "../../layout/TopModal";
import NotificationContent from "../NotificationContent";
import { useAuth } from "../../context/auth/AuthState";

const Header = ({ userDetails }) => {
  const location = useLocation();
  const { state } = useAuth();

  return (
    <nav className="shadow-md py-6 px-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link to={state.userType === "student" ? "/learn" : "/tutor_dashboard"}>
          <img
            src="/images/logo.svg"
            className="w-[160px] md:w-[205px]"
            alt="logo"
          />
        </Link>
        <div className="flex items-center">
          <Link
            to={state.userType === "student" ? "/learn" : "/tutor_dashboard"}
            className={`mr-[39px] ${
              location.pathname === "/learn" ||
              location.pathname === "/tutor_dashboard"
                ? "text-pry font-bold"
                : "text-black"
            } hidden md:block`}
          >
            Dashboard
          </Link>
          {state.userType === "student" ? (
            <Link
              to="/mycourses"
              className={`mr-[39px] ${
                location.pathname === "/mycourses"
                  ? "text-pry font-bold"
                  : "text-black"
              } hidden md:block`}
            >
              My Courses
            </Link>
          ) : (
            ""
          )}
          {state.userType === "student" ? (
            <Link
              to="/reminder_board"
              className={`mr-[39px] ${
                location.pathname === "/reminder_board"
                  ? "text-pry font-bold"
                  : "text-black"
              } hidden md:block`}
            >
              Reminder
            </Link>
          ) : (
            ""
          )}
          <div className="mr-[39px] cursor-pointer">
            <TopModal modalButton="Notification">
              <NotificationContent />
            </TopModal>
          </div>
          <Link to="/profile" className="flex items-center">
            <img src={userDetails.image} alt="avatar" className="w-[50px]" />
            <span
              className={`${
                location.pathname === "/profile"
                  ? "text-pry font-bold"
                  : "text-black"
              } ml-2`}
            >
              {userDetails.name} {userDetails.surname}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
