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
      <div className="md:w-[46%] mx-auto">
        <div className="bg-white mt-5 md:mt-1 py-6 md:py-16 border-2 border-[#BCCACE]-600">
          <div className="md:w-4/8 px-6 md:px-16 mx-auto text-sm">
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
              <li>
                <Link to="/#" className="flex items-start my-4 cursor-pointer">
                  <IoNotificationsOutline size="22px" className="mr-2" />
                  Notification
                </Link>
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
