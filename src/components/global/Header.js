import { Link, useLocation } from "react-router-dom";
import TopModal from "../../layout/TopModal";
import NotificationContent from "../NotificationContent";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="shadow-md py-6 px-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" >
          <img
            src="/images/logo.svg"
            className="w-[160px] md:w-[205px]"
            alt="logo"
          />
        </Link>
        <div className="flex items-center">
          <Link to="/dashboard" className={`mr-[39px] ${location.pathname === "/dashboard" ? "text-pry font-bold" : "text-black"} hidden md:block`}>
            Dashboard
          </Link>
          <Link to="/reminder_board" className={`mr-[39px] ${location.pathname === "/reminder_board" ? "text-pry font-bold" : "text-black"} hidden md:block`}>
            Reminder
          </Link>
          <div className="mr-[39px] cursor-pointer">
            <TopModal modalButton="Notification">
              <NotificationContent />
            </TopModal>
          </div>
          <Link to="/profile" className="flex items-center">
            <img src="/images/avatar.png" alt="avatar" />
            <span className={`${location.pathname === "/profile" ? "text-pry font-bold" : "text-black"} ml-2`}>John Doe</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
