import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
