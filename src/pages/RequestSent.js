import { Link } from "react-router-dom";

const RequestSent = () => {
  const sessionTutor = localStorage.getItem("sessionTutor");
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div className="bg-white text-center mt-5 md:mt-10 py-6 md:py-16">
            <form className="md:w-2/4 px-6 mx-auto text-sm">
              <div className="relative mb-4 md:mb-0">
                <img
                  src="./images/success.svg"
                  className="w-full rounded-lg"
                  alt="student"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Request Sent</h3>
              <p className="text-gray-400">
                You’ve successfully requested the service of <span className="font-bold text-black">{sessionTutor}</span>.
                You will receive notification when the tutor accept.
              </p>
              <Link to="/learn">
                <button className="text-sm block bg-pry w-full py-3 text-white mt-6">
                  Done
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSent;
