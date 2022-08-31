import { useContext } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import AuthContext from "../context/auth/authContext";

const ReminderBoard = () => {
  const { userDetails } = useContext(AuthContext);
  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold my-8 text-center">
          Improve and measure your skills with <br /> study reminder
        </h1>
        <p>
          Set reminder in your application and save time automation tracking
        </p>
        <div className="my-10">
          <img src="./images/creating_reminder.png" alt="create reminder" />
        </div>
        <Link
          to="/setreminder"
          className="flex text-sm block bg-pry w-[320px] py-4 text-white mt-6 justify-center items-center"
          value="Set Reminder"
        >
          Set Reminder
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default ReminderBoard;
