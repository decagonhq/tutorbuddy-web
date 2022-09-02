import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { AiOutlineUser, AiOutlineLock, AiOutlineLogout } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCamera } from "react-icons/bs";
import AuthContext from "../context/auth/authContext";
import TopModal from "../layout/TopModal";
import LogOutModal from "../layout/LogOutModal";
import LogOutContent from "../components/LogOutContent";
import NotificationContent from "../components/NotificationContent";
import { imageUpload } from "../api/api";

const Profile = () => {
  const { state, userDetails, setUserDetails } = useContext(AuthContext);

  const handleImageUpload = async (e) => {
    const picture = e.target.files[0];
    const formData = new FormData();

    formData.append("ImageToUpload", picture);

    const upload = await imageUpload(userDetails.id, formData);
    if (upload.data && upload.data.success) {
      setUserDetails((prev) => ({ ...prev, image: upload.data.data }));
    }
  };
  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="lg:w-[35%] md:w-[46%] mx-auto mt-8">
        <div className="bg-white mt-5 md:mt-1 py-6 md:py-16 border-2 border-[#BCCACE]-600">
          <div className="md:w-4/8 px-6 md:px-16 mx-auto text-sm">
            <div className="flex items-center flex-col bg-[#f7f7f7] h-[187px] text-sm rounded">
              <label htmlFor="select-image">
                <div className="relative">
                  <img
                    src={userDetails.image}
                    alt="avatar"
                    className="w-[90px] rounded-full mt-8 mb-4"
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
              </label>
              <input
                accept="image/png, image/jpg, image/jpeg"
                type="file"
                id="select-image"
                style={{ display: "none" }}
                onChange={handleImageUpload}
                multiple={false}
              />
              <span className="ml-2">
                {userDetails.name} {userDetails.surname}
              </span>
            </div>
            <ul>
              <li>
                <Link
                  to="/student/profile-edit"
                  className="flex items-start mt-10 cursor-pointer"
                >
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
              <li className="flex items-start my-4 cursor-pointer">
                <AiOutlineLogout size="22px" className="mr-2" />
                <LogOutModal modalButton="Logout">
                  <LogOutContent />
                </LogOutModal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
