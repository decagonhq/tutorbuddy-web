import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div>
            <img src="/images/logo.svg" className="mx-auto" alt="logo" />
          </div>
          <div className="bg-white text-center mt-5 md:mt-10 py-6 md:py-16">
            <form className="md:w-2/4 px-6 mx-auto text-sm">
              <div className="relative mb-4 md:mb-0">
                <img
                  src="./images/welcome.png"
                  className="w-full rounded-lg"
                  alt="student"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Welcome to TutorBuddy</h3>
              <p>We created a personal account for you.</p>
              <p className="mb-6">
                You can now start exploring all the features we have for you.
              </p>
              <Link to="/login">
                <button className="text-sm block bg-pry w-full py-3 text-white mt-6">
                  Let's Go
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
