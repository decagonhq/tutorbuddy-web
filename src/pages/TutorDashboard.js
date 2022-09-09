import { useState, useContext } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import StatusModal from "../layout/StatusModal";
import StatusContent from "../components/StatusContent";
import Pagination from "../components/global/Pagination";
import AuthContext from "../context/auth/authContext";

const TutorDashboard = () => {
  const { userDetails } = useContext(AuthContext);
  const [status, setStatus] = useState(false);
  const handleSetStatus = () => {
    setStatus(!status);
  };
  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="bg-red-100 w-full flex justify-between items-center py-8">
        <div className="py-5 px-24">
          <p className="text-2xl font-light">Welcome</p>
          <h4 className="text-3xl font-bold">
            {userDetails.name} {userDetails.surname}
          </h4>
        </div>
      </div>
      <div className="px-4 lg:px-[100px] grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
        <div className="bg-[#f7f7f7] text-sm pb-2 drop-shadow-lg">
          <div className="justify-between relative">
            <p className="bg-[#FD2959] text-white px-2 py-1 rounded absolute m-4">
              New
            </p>
            <img src="/images/python.png" alt="course" className="w-full" />
          </div>
          <div className="flex justify-between m-4 relative">
            <p className="font-semibold text-sm w-[188px] h-[34px]">
              Learn Coding in Python Development fundanmental
            </p>
            <p
              className="flex items-center border rounded-lg border-[#21334F] p-1 cursor-pointer"
              onClick={handleSetStatus}
            >
              Status
            </p>
            <StatusModal status={status} setStatus={setStatus}>
              <StatusContent />
            </StatusModal>
          </div>
          <div className="flex justify-between my-2 mx-4">
            <div className="flex justify-center items-center">
              <img
                className="w-[25px] rounded-full bg-black mr-2"
                src="/images/dummy.png"
                alt="avatar"
              />
              <span>Chukwudi Kamdibe</span>
            </div>
            <span className="text-[#758798]">Rate Student</span>
          </div>
          <div className="flex items-center my-2 mx-4">
            <img src="/images/Time.png" alt="date" />
            <span className="ml-2">July 26 - 30, 2022</span>
          </div>
          <div className="flex items-center my-2 mx-4">
            <img src="/images/Progress.png" alt="progress" />
            <span className="ml-2 text-[#FFC107]">In Progress</span>
          </div>
        </div>
        <div className="bg-[#f7f7f7] text-sm pb-2 drop-shadow-lg">
          <div className="justify-between relative">
            <img src="/images/python.png" alt="course" className="w-full" />
          </div>
          <div className="flex justify-between m-4">
            <p className="font-semibold text-sm w-[188px] h-[34px]">
              Learn Coding in Python Development fundanmental
            </p>
            <p className="flex items-center border rounded-lg border-[#21334F] p-1">
              Status
            </p>
          </div>
          <div className="flex justify-between my-2 mx-4">
            <div className="flex justify-center items-center">
              <img
                className="w-[25px] rounded-full bg-black mr-2"
                src="/images/dummy.png"
                alt="avatar"
              />
              <span>Chukwudi Kamdibe</span>
            </div>
            <span className="text-[#FD2959]">Rate Student</span>
          </div>
          <div className="flex items-center my-2 mx-4">
            <img src="/images/Time.png" alt="date" />
            <span className="ml-2">July 26 - 30, 2022</span>
          </div>
          <div className="flex items-center my-2 mx-4">
            <img src="/images/Success.png" alt="success" />
            <span className="ml-2 text-[#14A800]">Completed</span>
          </div>
        </div>
        <div className="bg-[#f7f7f7] text-sm pb-2 drop-shadow-lg">
          <div className="justify-between relative">
            <img src="/images/python.png" alt="course" className="w-full" />
          </div>
          <div className="flex justify-between m-4">
            <p className="font-semibold text-sm w-[188px] h-[34px]">
              Learn Coding in Python Development fundanmental
            </p>
            <p className="flex items-center border rounded-lg border-[#21334F] p-1">
              Status
            </p>
          </div>
          <div className="flex justify-between my-2 mx-4">
            <div className="flex justify-center items-center">
              <img
                className="w-[25px] rounded-full bg-black mr-2"
                src="/images/dummy.png"
                alt="avatar"
              />
              <span>Chukwudi Kamdibe</span>
            </div>
            <span className="text-[#FD2959]">Rate Student</span>
          </div>
          <div className="flex items-center my-2 mx-4">
            <img src="/images/Time.png" alt="date" />
            <span className="ml-2">July 26 - 30, 2022</span>
          </div>
          <div className="flex items-center my-2 mx-4">
            <img src="/images/Success.png" alt="success" />
            <span className="ml-2 text-[#14A800]">Completed</span>
          </div>
        </div>
      </div>
      <Pagination />
    </DashboardLayout>
  );
};

export default TutorDashboard;
