import { useContext, useState, useRef } from "react";
import { IoChevronBack } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "../context/auth/AuthState";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import axios from "../api/axios";
import "../styles/rate.css";

const Rate = () => {
  const { userDetails } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  const commentRef = useRef(null);

  console.log("COMMENT", commentRef);

  const {
    state: { userType },
  } = useAuth();
  const idFromUrl = window.location.href.split("/").pop();

  const token = localStorage.getItem("userToken");
  const userName = localStorage.getItem("userName");
  const studentImage = localStorage.getItem("studentImage");
  const user = JSON.parse(token);

  const handleStudentRating = async () => {
    try {
      await axios.post(
        `/Session/${idFromUrl}/rate-student`,
        JSON.stringify({
          ratings: rating,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleStudentComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `/Session/${idFromUrl}/student-comment`,
        JSON.stringify({
          comment: commentRef.current.value,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      navigate("/successful-comment");
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="mt-8 md:px-4">
        <div className="relative text-center">
          <Link to={user.roles[0] === "Tutor" ? "/tutor_dashboard" : "/learn"}>
            <div className="absolute left-0 flex items-center">
              <IoChevronBack />
              Back
            </div>
          </Link>
          <h2 className="text-lg lg:text-[32px] font-bold">
            {user.roles[0] === "Tutor" ? "Student rating" : "Rate Tutor"}
          </h2>
        </div>
        <form className="mt-[60px] py-7 px-4 lg:px-[70px] lg:w-2/4 mx-auto border">
          <div className="flex items-center flex-wrap mb-[80px]">
            <img
              src={
                user.roles[0] === "Tutor" ? studentImage : "/images/user-md.png"
              }
              className="mr-2 w-12 rounded-full"
              alt="user"
            />
            <div>
              <div className="text-lg font-bold">
                {user.roles[0] === "Tutor" ? userName : "Tutor Name"}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h6 className="mb-5">
              {user.roles[0] === "Tutor" ? "Rate student" : "Rate tutor"}
            </h6>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => {
                      setRating(index);
                      handleStudentRating();
                    }}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-[64px]">
            <label className="block mb-2">Comment</label>
            <textarea
              rows="8"
              placeholder="Write your comment..."
              className="block border w-full p-3"
              ref={commentRef}
            ></textarea>
            <button
              onClick={handleStudentComment}
              className="bg-pry text-white w-full py-3 mt-7"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Rate;
