import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { AiOutlineUser, AiOutlineLock, AiOutlineLogout } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCamera } from "react-icons/bs";
import TopModal from "../layout/TopModal";
import NotificationContent from "../components/NotificationContent";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="absolute border border-[#BCCACE]-600 w-[30rem] h-[28rem] bottom-1/4 left-[32%] px-12 py-8">
        <div className="flex items-center flex-col bg-[#f7f7f7] h-[187px] text-sm rounded">
          <div className="relative">
            <img
              src="/images/dummy.png"
              alt="avatar"
              className="w-[90px] rounded-full bg-black mt-8 mb-4"
            />
            <div className="absolute bottom-2 right-2 flex bg-white w-[25px] h-[25px] justify-center items-center rounded-full">
              <BsCamera
                style={{
                  color: "#FD2959",
                  fontSize: "16px",
                }}
              />
            </div>
          </div>

          <span className="ml-2">Kelechi Okoli</span>
        </div>
        <ul>
          <li>
            <Link to="/#" className="flex items-start mt-10 cursor-pointer">
              <AiOutlineUser size="22px" className="mr-2" />
              Edit Profile
            </Link>
          </li>
          <li className="flex flex-row mr-[39px] my-4 cursor-pointer">
            <IoNotificationsOutline size="22px" className="mr-2" />
            <TopModal modalButton="Notification">
              <NotificationContent />
            </TopModal>
          </li>
          <li>
            <Link
              to="/reset-password"
              className="flex items-start my-4 cursor-pointer"
            >
              <AiOutlineLock size="22px" className="mr-2" />
              Change Password
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-start my-4 cursor-pointer">
              <AiOutlineLogout size="22px" className="mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
