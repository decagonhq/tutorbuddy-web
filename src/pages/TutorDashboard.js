import { useState, useContext, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import DashboardLayout from "../layout/DashboardLayout";
import StatusModal from "../layout/StatusModal";
import StatusContent from "../components/StatusContent";
import Pagination from "../components/global/Pagination";
import AuthContext from "../context/auth/authContext";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const TutorDashboard = () => {
  const { userDetails } = useContext(AuthContext);
  const [status, setStatus] = useState(false);
  const [sessionDetails, setSessionDetails] = useState([]);
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  const [selectedId, setSelectedId] = useState("");
  const [statusValue, setStatusValue] = useState("");

  console.log({ sessionDetails });

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

  const testingChange = async (numState) => {
    try {
      await axios.patch(
        `/Session/${selectedId}`,
        JSON.stringify({
          status: numState,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const response = axios.get(`/Session/${user.id}/tutor`, {
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
      Authorization: `Bearer ${user.token}`,
    },
  });

  const handleStatusUpdate = async () => {
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

  const statusColor = (item) => {
    return item.status === 0
      ? "text-black"
      : item.status === 1
      ? "text-sky-600"
      : item.status === 2
      ? "text-[#FFC107]"
      : item.status === 3
      ? "text-[#14A800]"
      : item.status === 4
      ? "text-[#FD2959]"
      : "text-[#FD2959]";
  };

  useEffect(() => {
    response
      .then((result) => result)
      .then((data) => {
        console.log("STUDENT", data);
        setSessionDetails(data.data.data.pageItems);
      });
  }, []);

  const handleSetStatus = (student, studentImage) => {
    setStatus(status ? status : !status);
    localStorage.setItem("userName", student);
    localStorage.setItem("studentImage", studentImage);
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
      <div className="px-4 lg:px-[100px] grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8 z-0">
        {sessionDetails?.map((item) => (
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
                  handleSetStatus(item.student, item.studentImage);
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
                testingChange={testingChange}
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
              {item.status === 3 ? (
                <Link to={`/rate/${item.sessionId}`}>
                  <span className="text-pry">Rate Student</span>
                </Link>
              ) : (
                <span className="text-[#758798]">Rate Student</span>
              )}
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
              <AiFillCheckCircle size={20} className={`${statusColor(item)}`} />
              <span className={`ml-2 ${statusColor(item)}`}>
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
        ))}
      </div>
      <Pagination />
    </DashboardLayout>
  );
};

export default TutorDashboard;
