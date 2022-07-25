// import { Link } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout";
import { AiOutlineUser, AiOutlineLock, AiOutlineLogout } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="absolute border border-[#BCCACE]-600 w-[30rem] h-[28rem] bottom-1/4 left-[32%] px-12 py-8">
        <div className="flex items-center flex-col bg-[#f7f7f7] h-[187px] text-sm rounded">
          <img
            src="/images/dummy.png"
            alt="avatar"
            className="w-[90px] rounded-full bg-black mt-8 mb-4"
          />
          <span className="ml-2">Kelechi Okoli</span>
        </div>
        <ul>
          <li className="flex items-baseline mt-10">
            <AiOutlineUser size="22px" />
            <span>Edit Profile</span>
          </li>
          <li className="flex items-baseline my-4">
            <IoNotificationsOutline size="22px" />
            Notification
          </li>
          <li className="flex items-baseline my-4">
            <AiOutlineLock size="22px" />
            Change Password
          </li>
          <li className="flex items-baseline my-4">
            <AiOutlineLogout size="22px" />
            Logout
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
