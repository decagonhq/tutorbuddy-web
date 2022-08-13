import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

const Requests = () => {
  return (
    <DashboardLayout>
      <div className="md:px-4">
        <h2 className="text-[32px] font-bold">All Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 md:mt-[60px]">
          <div className="p-4 bg-black/[0.03] rounded">
            <div className="flex items-center justify-between mb-7">
              <div className="text-[14px] bg-pry rounded-3xl text-white px-1.5">
                New
              </div>
              <div className="text-[#758798] text-[14px]">June 6, 2022</div>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div>Javascript</div>
              <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">
                Change status
              </button>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center">
                <img src="./images/user.png" alt="avatar" />
                <span className="ml-2">Chukwudi Kamdibe</span>
              </div>
              <Link to="/rate/2" className="text-pry text-[14px]">
                Rate
              </Link>
            </div>
            <button className="w-full py-3 bg-pry text-white rounded">
              In progress
            </button>
          </div>
          <div className="p-4 bg-black/[0.03] rounded">
            <div className="flex items-center justify-end mb-7">
              <div className="text-[#758798] text-[14px]">June 6, 2022</div>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div>Javascript</div>
              <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">
                Change status
              </button>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center">
                <img src="./images/user.png" alt="avatar" />
                <span className="ml-2">Chukwudi Kamdibe</span>
              </div>
              <Link to="/rate/2" className="text-pry text-[14px]">
                Rate
              </Link>
            </div>
            <button className="w-full py-3 bg-pry text-white rounded">
              In progress
            </button>
          </div>
          <div className="p-4 bg-black/[0.03] rounded">
            <div className="flex items-center justify-end mb-7">
              <div className="text-[#758798] text-[14px]">June 6, 2022</div>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div>Javascript</div>
              <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">
                Change status
              </button>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center">
                <img src="./images/user.png" alt="avatar" />
                <span className="ml-2">Chukwudi Kamdibe</span>
              </div>
              <Link to="/rate/2" className="text-pry text-[14px]">
                Rate
              </Link>
            </div>
            <button className="w-full py-3 bg-pry text-white rounded">
              In progress
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 md:mt-[60px]">
          <div className="p-4 bg-black/[0.03] rounded">
            <div className="flex items-center justify-between mb-7">
              <div className="text-[14px] bg-pry rounded-3xl text-white px-1.5">
                New
              </div>
              <div className="text-[#758798] text-[14px]">June 6, 2022</div>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div>Javascript</div>
              <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">
                Change status
              </button>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center">
                <img src="./images/user.png" alt="avatar" />
                <span className="ml-2">Chukwudi Kamdibe</span>
              </div>
              <Link to="/rate/2" className="text-pry text-[14px]">
                Rate
              </Link>
            </div>
            <button className="w-full py-3 bg-pry text-white rounded">
              In progress
            </button>
          </div>
          <div className="p-4 bg-black/[0.03] rounded">
            <div className="flex items-center justify-end mb-7">
              <div className="text-[#758798] text-[14px]">June 6, 2022</div>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div>Javascript</div>
              <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">
                Change status
              </button>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center">
                <img src="./images/user.png" alt="avatar" />
                <span className="ml-2">Chukwudi Kamdibe</span>
              </div>
              <Link to="/rate/2" className="text-pry text-[14px]">
                Rate
              </Link>
            </div>
            <button className="w-full py-3 bg-pry text-white rounded">
              In progress
            </button>
          </div>
          <div className="p-4 bg-black/[0.03] rounded">
            <div className="flex items-center justify-end mb-7">
              <div className="text-[#758798] text-[14px]">June 6, 2022</div>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div>Javascript</div>
              <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">
                Change status
              </button>
            </div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center">
                <img src="./images/user.png" alt="avatar" />
                <span className="ml-2">Chukwudi Kamdibe</span>
              </div>
              <Link to="/rate/2" className="text-pry text-[14px]">
                Rate
              </Link>
            </div>
            <button className="w-full py-3 bg-pry text-white rounded">
              In progress
            </button>
          </div>
        </div>

        <div className="flex justify-center my-12">
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="/student-dashboard"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50"
              >
                <BiLeftArrowAlt className="h-5 w-5" aria-hidden="true" />
                <span className="ml-1">Previous</span>
              </a>
              <a
                href="/student-dashboard"
                aria-current="page"
                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </a>
              <a
                href="/student-dashboard"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </a>
              <a
                href="/student-dashboard"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="/student-dashboard"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </a>
              <a
                href="/student-dashboard"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                9
              </a>
              <a
                href="/student-dashboard"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                10
              </a>
              <a
                href="/student-dashboard"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50"
              >
                <span className="mr-1">Next</span>
                <BiRightArrowAlt className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Requests;
