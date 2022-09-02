import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "../api/axios";
import { useContext } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { BsCamera, BsArrowLeft } from "react-icons/bs";
import AuthContext from "../context/auth/authContext";

const ProfileEdit = () => {
  const { userDetails } = useContext(AuthContext);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const userEmail = localStorage.getItem("email");

  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  console.log("ID", user.id);

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "User/update-user",
        JSON.stringify({
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: userEmail,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      navigate("/profile");
    } catch (error) {
      console.log("ERROR", error);
      // setError(error?.response?.data?.title);
    }
  };
  return (
    <DashboardLayout userDetails={userDetails}>
      <div>
        <div className="md:w-[46%] mx-auto">
          <Link
            to="/profile"
            className="items-start my-4 cursor-pointer bg-[#f7f7f7] w-auto inline-block py-2 px-4 rounded-full"
          >
            <div className="flex">
              <BsArrowLeft size="22px" className="mr-2" />
              Back
            </div>
          </Link>
          <div className="bg-white mt-5 mb-5 md:mb-1 md:mt-1 py-6 md:py-16 border-2 border-[#BCCACE]-600">
            <form className="md:w-4/8 px-6 md:px-16 mx-auto text-sm">
              <div className="flex items-center flex-col h-[187px] text-sm rounded">
                <div className="relative">
                  <img
                    src="/images/dummy.png"
                    alt="avatar"
                    className="w-[90px] rounded-full bg-black mt-4 mb-4"
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
              <h3 className="mb-4 text-lg font-bold">Profile</h3>
              <div>
                <label>First Name</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 outline-none"
                  type="text"
                  placeholder="Enter full name"
                  ref={firstName}
                />
              </div>
              <div className="mt-4 mb-2">
                <label>Last Name</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 outline-none"
                  type="text"
                  placeholder="Enter full name"
                  ref={lastName}
                />
              </div>
              <div className="mt-4 mb-2">
                <label>Email</label>
                <input
                  className="block border w-full mt-2 py-3 px-2"
                  type="email"
                  placeholder="Enter email"
                  defaultValue={userEmail}
                  // ref={email}
                  disabled
                />
              </div>
              <Link to="/profile">
                <button
                  type="submit"
                  className="text-sm block rounded bg-pry w-full py-3 text-white mt-6"
                  onClick={handleEdit}
                >
                  Save
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileEdit;
