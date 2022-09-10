import { useState, useContext, useEffect } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import StatusModal from "../layout/StatusModal";
import StatusContent from "../components/StatusContent";
import Pagination from "../components/global/Pagination";
import AuthContext from "../context/auth/authContext";
import axios from "../api/axios";

const TutorDashboard = () => {
  const { userDetails } = useContext(AuthContext);
  const [status, setStatus] = useState(false);
  const [sessionDetails, setSessionDetails] = useState([]);
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  const [selectedId, setSelectedId] = useState("");
  const [statusValue, setStatusValue] = useState("");

  console.log({selectedId, statusValue})

  const onRequest = () => {
    setStatusValue(0);
  };
  const onAccepted = () => {
    setStatusValue(1);
  };
  const onInProgress = () => {
    setStatusValue(2);
  };
  const onCompleted = () => {
    setStatusValue(3);
  };
  const onAbandoned = () => {
    setStatusValue(4);
  };
  const onCancel = () => {
    setStatusValue(5);
  };

  const response = axios.get(`/Session/${user.id}/tutor`, {
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
      Authorization: `Bearer ${user.token}`,
    },
  });

  const handleStatusUpdate = async () => {
    console.log("HELLO THERE");
    // e.preventDefault();
    try {
      await axios.patch(
        `/Session/${selectedId}`,
        JSON.stringify({
          status: statusValue,
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

  useEffect(() => {
    response
      .then((result) => result)
      .then((data) => {
        setSessionDetails(data.data.data.pageItems);
      });
  }, []);

  const handleSetStatus = () => {
    setStatus(status? status : !status);
  };
  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="bg-red-100 w-full flex justify-between items-center py-8">
        <div className="py-5 px-24">
          <p className="text-2xl font-light">Welcome</p>
          <h4 className="text-3xl font-bold">John Doe</h4>
        </div>
      </div>
      {sessionDetails?.map((item) => (
        <div className="px-4 lg:px-[100px] grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8 z-0">
          <div className="bg-[#f7f7f7] text-sm pb-2 drop-shadow-lg">
            <div className="justify-between relative">
              <p className="bg-[#FD2959] text-white px-2 py-1 rounded absolute m-4">
                New
              </p>
              <img src={item.thumbnail} alt="course" className="w-full" />
            </div>
            <div className="flex justify-between m-4 relative">
              <p className="font-semibold text-sm w-[188px] h-[34px]">
                {item.topic}
              </p>
              <p
                className="flex items-center border rounded-lg border-[#21334F] p-1 cursor-pointer"
                key={item.sessionId}
                onClick={() => {
                  handleSetStatus();
                  setSelectedId(item.sessionId);
                }}
              >
                Status
              </p>
              <StatusModal
                statusId={selectedId === item.sessionId}
                status={status}
                setStatus={setStatus}
                onRequest={onRequest}
                onAbandoned={onAbandoned}
                onAccepted={onAccepted}
                onCancel={onCancel}
                onCompleted={onCompleted}
                onInProgress={onInProgress}
                handleStatusUpdate={handleStatusUpdate}
              >
                <StatusContent id={item.sessionId} />
              </StatusModal>
            </div>
            <div className="flex justify-between my-2 mx-4">
              <div className="flex justify-center items-center">
                <img
                  className="w-[25px] rounded-full bg-black mr-2"
                  src={item.studentImage}
                  alt="avatar"
                />
                <span>{item.student}</span>
              </div>
              <span className="text-[#758798]">Rate Student</span>
            </div>
            <div className="flex items-center my-2 mx-4">
              <img src="/images/Time.png" alt="date" />
              <span className="ml-2">
                {new Date(item.startime).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                })}
                {" - "}
                {new Date(item.endTime).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center my-2 mx-4">
              <img src="/images/Progress.png" alt="progress" />
              <span className="ml-2 text-[#FFC107]">
                {item.status === 0
                  ? "Requested"
                  : item.status === 1
                  ? "Accepted"
                  : item.status === 2
                  ? "In Progress"
                  : item.status === 3
                  ? "Completed"
                  : item.status === 4
                  ? "Abandoned"
                  : "Canceled"}
              </span>
            </div>
          </div>
        </div>
      ))}
      <Pagination />
    </DashboardLayout>
  );
};

export default TutorDashboard;
