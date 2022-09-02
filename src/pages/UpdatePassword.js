import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const UpdatePassword = () => {
  const oldasswordRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const email = localStorage.getItem("email");

  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  console.log("ID", user.id);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        "User/update-password",
        JSON.stringify({
          id: user.id,
          currentPassword: oldasswordRef.current.value,
          newPassword: passwordRef.current.value,
        }),
        {
          headers: { "Content-Type": "application/json", accept: "*/*" },
          Authorization: `Bearer ${user.token}`,
        }
      );
      navigate("/profile");
    } catch (error) {
      console.log("ERROR", error);
      setError(error?.response?.data?.title);
    }
  };

  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div>
            <img src="/images/logo.svg" className="mx-auto" alt="logo" />
          </div>
          <div className="bg-white mt-5 md:mt-10 py-6 md:py-16">
            <form
              onSubmit={handleUpdate}
              className="md:w-2/4 px-6 mx-auto text-sm"
            >
              <h3 className="text-lg font-bold mb-4">Update Password</h3>
              <div className="mb-4">
                <label>Old Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2"
                  type="password"
                  placeholder="Enter your old password"
                  ref={oldasswordRef}
                />
              </div>
              <div>
                <label>New Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2"
                  type="password"
                  placeholder="Enter your newpassword"
                  ref={passwordRef}
                />
              </div>
              <button
                type="submit"
                className="text-sm block bg-pry w-full py-3 text-white mt-6"
              >
                Update Password
              </button>
              <div className="text-center text-pry mt-4">{error}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
