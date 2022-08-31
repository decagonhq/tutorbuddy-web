import { useContext } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import ReminderBar from "../layout/ReminderBar";
import { formatDate, getToday } from "../utils/helpers";
import AuthContext from "../context/auth/authContext";

const ReminderHistory = () => {
  const { userDetails } = useContext(AuthContext);
  let date = Object.entries(formatDate());
  console.log(getToday());
  return (
    <DashboardLayout userDetails={userDetails}>
      <div>
        <div className="md:w-[46%] mx-auto">
          <Link
            to="/setreminder"
            className="items-start my-4 cursor-pointer bg-[#f7f7f7] w-auto inline-block py-2 px-4 rounded-full"
          >
            <div className="flex">
              <BsArrowLeft size="22px" className="mr-2" />
              Back
            </div>
          </Link>
          <h1 className="text-3xl font-bold my-8">
            All reminder will appear here
          </h1>
          <div className="bg-white mt-5 mb-5 md:mb-1 md:mt-1 py-6 md:py-16 border-2 border-[#BCCACE]-600">
            <div className="md:w-4/8 px-6 md:px-16 mx-auto text-sm">
              <div className="bg-[#f7f7f7] p-4">
                <p>June 8, 2022</p>
                <h2 className="text-2xl font-bold mt-2">Today</h2>
              </div>
              <div className="flex justify-between my-6">
                {date.map((dt, ind) => (
                  <div key={ind}>
                    <div>{dt[0]}</div>
                    <div className="font-bold text-center my-2">{dt[1]}</div>
                  </div>
                ))}
              </div>
              <ReminderBar />
              <Link to="/setreminder">
                <button className="flex text-sm bg-pry w-full py-2 text-white mt-6 justify-center items-center">
                  <IoIosAddCircleOutline
                    style={{
                      color: "#FFF",
                      fontSize: "28px",
                      marginRight: "7px",
                    }}
                  />
                  Add New
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReminderHistory;
