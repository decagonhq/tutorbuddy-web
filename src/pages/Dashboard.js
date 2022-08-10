import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthState";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
  const {
    state: { userType },
    dispatch,
  } = useAuth();

  const handleUser = (userType) => {
    dispatch({ type: "UPDATE", userType });
  };
  return (
    <DashboardLayout>
      <div className="sm:px-4 lg:px-[100px]">
        <h2 className="text-[32px] leading-[36px]">
          How would you want to use this app?
        </h2>
        <p>Please select an option</p>
        <div className="md:p-[60px] mt-4 md:mt-[70px] md:border">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between">
              <div
                className="relative md:w-[48%] mb-4 md:mb-0"
                onClick={() => handleUser("student")}
              >
                <img
                  src="./images/student.png"
                  className="w-full rounded-lg"
                  alt="student"
                />
                <div
                  className={`bg-black/[0.6] w-full h-full absolute top-0 left-0 rounded-lg ${
                    userType === "student" ? "border-2 border-pry" : ""
                  }`}
                ></div>
                <p className="absolute left-2/4 bottom-2/4 transform -translate-x-2/4 -trasnlate-y-2/4 text-white text-2xl font-bold">
                  Student
                </p>
              </div>
              <div
                className="relative md:w-[48%]"
                onClick={() => handleUser("tutor")}
              >
                <img
                  src="./images/tutor.png"
                  className="w-full rounded-lg"
                  alt="tutor"
                />
                <div
                  className={`bg-black/[0.6] w-full h-full absolute top-0 left-0 rounded-lg ${
                    userType === "tutor" ? "border-2 border-pry" : ""
                  }`}
                ></div>
                <p className="absolute left-2/4 bottom-2/4 transform -translate-x-2/4 -trasnlate-y-2/4 text-white text-2xl font-bold">
                  Tutor
                </p>
              </div>
            </div>
            <div className="text-center mt-[60px]">
              <Link
                to={userType === "tutor" ? "/tutor_dashboard" : "/learn"}
                className="bg-pry text-white w-full md:w-[320px] py-3 inline-block"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
