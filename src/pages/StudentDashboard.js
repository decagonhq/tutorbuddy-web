import { useContext } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useAuth } from "../context/auth/AuthState";
import DashboardLayout from "../layout/DashboardLayout";
import { AiFillStar } from "react-icons/ai";
import Pagination from "../components/global/Pagination";
import AuthContext from "../context/auth/authContext";


const StudentDashboard = () => {
  const { userDetails } = useContext(AuthContext);
  const {
    state: { userType },
  } = useAuth();

  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="sm:px-4 lg:px-[100px]">
        <h2 className="text-[32px] leading-[36px]">
          What would you like to learn today?
        </h2>
        <div className="md:p-[60px] mt-4 md:mt-[70px] md:border">
          <div className="block md:flex">
            <div className="w-full mr-2 bg-[#f7f7f7] border-2 border-[#BCCACE]-600 mb-4 md:mb-0 py-2 md:py-0 flex items-center justify-center">
              <RiSearchLine size="22px" color="#BCCACE" className="mr-2 ml-2" />
              <input
                className="w-full focus:outline-none pl-2 h-full bg-transparent"
                type="text"
                placeholder="Search"
              />
            </div>

            <button className="bg-pry text-white w-full md:w-[320px] py-3 inline-block">
              Search
            </button>
          </div>

          <div className="block md:flex justify-between mt-12">
            <div className="mb-12 md:mb-0 shadow-lg">
              <img
                src="/images/subject-1.png"
                alt="Student"
                className="w-full"
              />
              <div className="p-4">
                <p className="text-[#758798] font-light">MATHEMATICS</p>
                <p>Chukwudi Kamdibe</p>
                <div className="flex items-center">
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#F7F6F0" size="18" />
                  <p className="ml-2">(10)</p>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-0 shadow-lg">
              <img
                src="/images/subject-2.png"
                alt="Student"
                className="w-full"
              />
              <div className="p-4">
                <p className="text-[#758798] font-light">CODING</p>
                <p>Chukwudi Kamdibe</p>
                <div className="flex items-center">
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#F7F6F0" size="18" />
                  <p className="ml-2">(10)</p>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-0 shadow-lg">
              <img
                src="/images/subject-3.png"
                alt="Student"
                className="w-full"
              />
              <div className="p-4">
                <p className="text-[#758798] font-light">GRAPHIC DESIGN</p>
                <p>Chukwudi Kamdibe</p>
                <div className="flex items-center">
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#F7F6F0" size="18" />
                  <p className="ml-2">(10)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:flex justify-between mt-12">
            <div className="mb-12 md:mb-0 shadow-lg">
              <img
                src="/images/subject-4.png"
                alt="Student"
                className="w-full"
              />
              <div className="p-4">
                <p className="text-[#758798] font-light">CHEMISTRY</p>
                <p>Chukwudi Kamdibe</p>
                <div className="flex items-center">
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#F7F6F0" size="18" />
                  <p className="ml-2">(10)</p>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-0 shadow-lg">
              <img
                src="/images/subject-5.png"
                alt="Student"
                className="w-full"
              />
              <div className="p-4">
                <p className="text-[#758798] font-light">PHYSICS</p>
                <p>Chukwudi Kamdibe</p>
                <div className="flex items-center">
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#F7F6F0" size="18" />
                  <p className="ml-2">(10)</p>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-0 shadow-lg">
              <img
                src="/images/subject-6.png"
                alt="Student"
                className="w-full"
              />
              <div className="p-4">
                <p className="text-[#758798] font-light">CONTENT WRITING</p>
                <p>Chukwudi Kamdibe</p>
                <div className="flex items-center">
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#FFC107" size="18" />
                  <AiFillStar color="#F7F6F0" size="18" />
                  <p className="ml-2">(10)</p>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
