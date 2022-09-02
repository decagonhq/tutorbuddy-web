import { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "../context/auth/AuthState";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Rate = () => {
  const { userDetails } = useContext(AuthContext);
  const {
    state: { userType },
  } = useAuth();

  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="md:px-4">
        <div className="relative text-center">
          <Link to={userType === "tutor" ? "/requests" : "/learn"}>
            <div className="absolute left-0 flex items-center">
              <IoChevronBack />
              Back
            </div>
          </Link>
          <h2 className="text-lg lg:text-[32px] font-bold">
            {userType === "tutor" ? "Student rating" : "Rate Tutor"}
          </h2>
        </div>
        <form className="mt-[60px] py-7 px-4 lg:px-[70px] lg:w-2/4 mx-auto border">
          <div className="flex items-center flex-wrap mb-[80px]">
            <img src="/images/user-md.png" className="mr-6" alt="user" />
            <div>
              <div className="text-lg font-bold">Chukwudi Kamdibe</div>
              <div className="flex items-center">
                <MdOutlineEmail />
                chukwudikamdibe@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="mb-5">
              {userType === "tutor" ? "Rate student" : "Rate tutor"}
            </h6>
            <div className="flex">
              <AiFillStar color="#FFC107" size="32px" />
              <AiFillStar color="#FFC107" size="32px" />
              <AiFillStar color="#FFC107" size="32px" />
              <AiFillStar color="#FFC107" size="32px" />
              <AiFillStar color="#FFC107" size="32px" />
            </div>
          </div>
          <div className="mt-[64px]">
            <label className="block mb-2">Comment</label>
            <textarea
              rows="8"
              placeholder="Write your comment..."
              className="block border w-full p-3"
            ></textarea>
            <button className="bg-pry text-white w-full py-3 mt-7">Send</button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Rate;
