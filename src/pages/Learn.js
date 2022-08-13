import { useState } from "react";
import Modal from "react-modal";
import { AiFillStar, AiOutlineSafetyCertificate } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import DashboardLayout from "../layout/DashboardLayout";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

Modal.setAppElement("#root");

const Learn = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <DashboardLayout>
      <div className="px-4 lg:px-[100px]">
        <h2 className="text-[32px] font-bold leading-[32px]">
          What would you like to learn today?
        </h2>
        <div className="flex flex-col md:flex-row items-center h-auto md:h-[48px] mt-6">
          <input
            type="text"
            className="border border-[#BCCACE] w-full bg-black/[0.03] h-full py-2 px-6 md:mr-1 focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-pry w-full md:w-[145px] text-white h-full py-2 mt-1 md:mt-0">
            Search
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
          <div onClick={openModal} className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject-1.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">
                MATHEMATICS
              </div>
              <div className="text-[#21334F] mb-2">Chukwudi Kamdibe</div>
              <div className="flex items-center">
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#F7F6F0" />
                <span>(10)</span>
              </div>
            </div>
          </div>
          <div onClick={openModal} className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject-2.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">
                CODING
              </div>
              <div className="text-[#21334F] mb-2">Chukwudi Kamdibe</div>
              <div className="flex items-center">
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#F7F6F0" />
                <span>(10)</span>
              </div>
            </div>
          </div>
          <div onClick={openModal} className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject-3.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">
                GRAPHICS DESIGN
              </div>
              <div className="text-[#21334F] mb-2">Chukwudi Kamdibe</div>
              <div className="flex items-center">
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#F7F6F0" />
                <span>(10)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
          <div onClick={openModal} className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject-4.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">
                CHEMISTRY
              </div>
              <div className="text-[#21334F] mb-2">Chukwudi Kamdibe</div>
              <div className="flex items-center">
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#F7F6F0" />
                <span>(10)</span>
              </div>
            </div>
          </div>
          <div onClick={openModal} className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject-5.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">
                PHYSICS
              </div>
              <div className="text-[#21334F] mb-2">Chukwudi Kamdibe</div>
              <div className="flex items-center">
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#F7F6F0" />
                <span>(10)</span>
              </div>
            </div>
          </div>
          <div onClick={openModal} className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject-6.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">
                CONTENT WRITING
              </div>
              <div className="text-[#21334F] mb-2">Chukwudi Kamdibe</div>
              <div className="flex items-center">
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#F7F6F0" />
                <span>(10)</span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="w-full md:w-[694px] bg-gray-50 absolute bottom-0 md:bottom-2/4 right-2/4 transform translate-x-2/4 md:translate-y-2/4 shadow-sm outline-none overflow-auto"
          overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-40"
          contentLabel="Example Modal"
        >
          <div className="flex justify-between items-center p-8 border border-black/[0.16] border-bottom">
            <h2 className="font-[600]">Tutor Profile</h2>
            <button onClick={closeModal}>
              <IoClose size="24px" />
            </button>
          </div>
          <div className="p-8">
            <div className="flex">
              <div>
                <img src="/images/tutor-avatar.png" alt="tutor" />
              </div>
              <div className="ml-4">
                <div className="text-lg font-bold mb-1.5">Chukwudi Kamdibe</div>
                <div className="flex items-center mb-1.5">
                  <AiOutlineSafetyCertificate color="#14A800" size="18px" />{" "}
                  <span className="text-[#758798] ml-1.5">Certified Tutor</span>
                </div>
                <div className="flex items-center">
                  <GoLocation />{" "}
                  <span className="text-[#758798] ml-1.5">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="my-6">
              <h3 className="font-bold mb-2">About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh
                quam odio sit vestibulum sagittis urna. Velit fermentum,
                accumsan, egestas sit volutpat.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div className="md:w-[40%] md:mb-4">
                <h3 className="font-bold mb-2">Expertise</h3>
                <div className="flex">
                  <div className="bg-black/[0.03] px-2 py-1 rounded-[40px]">
                    Physics
                  </div>
                  <div className="bg-black/[0.03] px-2 py-1 rounded-[40px] mx-2">
                    Coding
                  </div>
                  <div className="bg-black/[0.03] px-2 py-1 rounded-[40px]">
                    Chemistry
                  </div>
                </div>
              </div>
              <div className="md:w-[40%]">
                <h3 className="font-bold mb-2">Hourly Rate</h3>
                <div>
                  <div>N1,250 per/hr</div>
                </div>
              </div>
            </div>
            <div className="border border-black/[0.08]">
              <div className="flex justify-between items-center px-2 py-3 border border-bottom border-black/[0.16]">
                <div className="font-bold">Ratings (6)</div>
                <Link
                  className="px-2 py-1 font-[600] text-pry bg-pry/[0.1] rounded"
                  to="/rate/1"
                >
                  Rate Tutor
                </Link>
              </div>
              <div className="p-2 border border-bottom border-black/[0.08]">
                <h6>Awesome tutor</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <div className="p-2">
                <h6>Awesome tutor</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <button className="bg-pry py-3 text-white w-full md:w-320px mt-6">
              Engage Tutors
            </button>
          </div>
        </Modal>

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

export default Learn;
