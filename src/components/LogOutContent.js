import { Link } from "react-router-dom";

const LogOutContent = ({ handleclosemodal }) => {
  return (
    <div className="w-[331px] text-sm">
      <div>
        <p className="mb-2 font-bold">Logout Confirmation</p>
        <hr />
      </div>
      <div className="flex flex-col space-y-4 pt-2">
        <p>Are you sure you want to logout from your account?</p>
        <Link
          to="/"
          className="flex block bg-pry w-full rounded py-4 text-white mt-6 justify-center items-center"
        >
          Yes
        </Link>
        <button
          onClick={handleclosemodal}
          className="flex block border-2 border-[#FD2959] text-[#FD2959] w-full rounded py-4 mt-6 justify-center items-center"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default LogOutContent;
