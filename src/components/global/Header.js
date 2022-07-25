import { Link } from "react-router-dom"
import { useAuth } from "../../context/auth/AuthState"

const Header = () => {
    const { state: { userType } } = useAuth()

    return (
      <nav className="shadow-md py-6 px-4">
        <div className="flex justify-between items-center container mx-auto">
          <Link to="/">
            <img
              src="/images/logo.svg"
              className="w-[160px] md:w-[205px]"
              alt="logo"
            />
          </Link>
          <div className="flex items-center">
            <Link
              to="/dashboard"
              className="mr-[39px] text-pry hidden md:block"
            >
              Dashboard
            </Link>
            {userType === "student" && (
              <Link to="/reminder" className="mr-[39px] hidden md:block">
                Reminder
              </Link>
            )}
            <Link to="/profile" className="flex items-center">
              <img src="/images/avatar.png" alt="avatar" />
              <span className="ml-2">John Doe</span>
            </Link>
          </div>
        </div>
      </nav>
    );
}

export default Header