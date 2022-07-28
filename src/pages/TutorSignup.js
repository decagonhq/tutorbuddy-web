import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div>
            <img src="/images/logo.svg" className="mx-auto" alt="logo" />
          </div>
          <div className="bg-white mt-5 md:mt-10 py-6 md:py-16">
            <form className="md:w-2/4 px-6 mx-auto text-sm">
              <h3 className="text-lg font-bold">Create an account</h3>
              <p className="mb-10">
                Create your account to connect with students.
              </p>
              <div>
                <label>Name</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mt-4">
                <label>Tell Us About Yourself</label>
                <textarea
                  className="block border w-full mt-2 py-3 px-2"
                  rows="1"
                  placeholder="Short Bio..."
                ></textarea>
              </div>
              <div className="mt-4">
                <label>Upload Profile Picture</label>
                <input
                  className="block border w-full mt-2 py-2.5 px-2 focus:outline-none"
                  type="file"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4">
                <label>Subjects</label>
                <select
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  placeholder="Select"
                >
                  <option>Select</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Coding</option>
                  <option>Graphics Design</option>
                  <option>Video Editing</option>
                  <option>Chemistry</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div className="mt-4">
                <label>Availability</label>
                <select
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  placeholder="Select"
                >
                  <option>Choose</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
              </div>
              <div className="mt-4">
                <label>Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <Link to="/welcome">
                <button className="text-sm block bg-pry w-full py-3 text-white mt-6">
                  Sign Up
                </button>
              </Link>
            </form>
            <div className="text-center mt-10">
              Already have an account?{" "}
              <Link to="/login" className="text-pry">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
