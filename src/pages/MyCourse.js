import { useContext, useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import ProgressBar from "../components/ProgressBar";
import AuthContext from "../context/auth/authContext";
import { getMyCourses } from "../api/api";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const { userDetails } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  const allCourses = async () => {
    const res = await getMyCourses();
    if (res.success) {
      setMyCourses(res.data.pageItems);
    }
  };

  useEffect(() => {
    allCourses();
  }, []);
  const navigate = useNavigate();

  const handleRateTutor = (sessionId, tutorName, tutorAvatar) => {
    localStorage.setItem(
      "tutorDetails",
      JSON.stringify({ tutorName, tutorAvatar })
    );
    navigate(`/rate/${sessionId}`);
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

  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="bg-red-100 w-full flex justify-between items-center px-4 lg:px-[100px] py-10">
        <div className="py-5 px-24">
          <h1 className="text-2xl font-bold">My Course</h1>
        </div>
      </div>
      <div className="px-4 lg:px-[100px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
        {myCourses?.length > 0 ? (
          myCourses.map((course) => (
            <div className="flex flex-col bg-white shadow">
              <div className="mb-2">
                <img
                  src={course.thumbnail}
                  className="w-full h-[161px]"
                  alt="subject"
                />
                <div className="flex justify-between m-4 relative">
                  <p className="font-semibold text-sm w-[188px] h-[34px]">
                    {course.topic}
                  </p>
                  {course.status === 3 ? (
                    <p
                      onClick={() =>
                        handleRateTutor(
                          course.sessionId,
                          course.tutor,
                          course.tutorImage
                        )
                      }
                      className="flex items-center bg-[#d3c124e2] text-xs rounded-2xl p-1 cursor-pointer"
                    >
                      Rate Tutor
                    </p>
                  ) : (
                    <p className="flex items-center bg-[#ebebeb] text-xs rounded-2xl p-1">
                      Rate Tutor
                    </p>
                  )}
                </div>
                <div className="flex justify-between my-2 mx-4">
                  <span>{course.tutor}</span>
                </div>
                <ProgressBar completed={course.status === 3 ? 100 : course.status === 2 ? 35 : 0} />
                <p className={`my-2 mx-4 ${statusColor(course)}`}>
                  {course.status === 0
                    ? "You just requested for a session"
                    : course.status === 1
                    ? "Your session is accepted"
                    : course.status === 2
                    ? "You session is in progress"
                    : course.status === 3
                    ? "You session is completed"
                    : course.status === 4
                    ? "Your session is abandoned"
                    : "Your session is cancelled"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No Courses to show for now</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyCourse;
