import { useState } from "react";
import Modal from "react-modal";
import { AiFillStar, AiOutlineSafetyCertificate } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import DashboardLayout from "../layout/DashboardLayout";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

Modal.setAppElement("#root");

const Category = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <DashboardLayout>
      <div className="bg-red-100 w-full px-4 lg:px-[100px] py-10">
        <h4 className="text-3xl font-bold mb-4">All Courses</h4>
        <input
          type="text"
          className="border border-[#BCCACE] w-full py-2 px-6 md:mr-1 focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="px-4 lg:px-[100px]">
        <h2 className="mt-8 font-bold">Python Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
          <div onClick={openModal} className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject.png"
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
                src="/images/subject.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">CODING</div>
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
                src="/images/subject.png"
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
                src="/images/subject.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">CHEMISTRY</div>
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
                src="/images/subject.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">PHYSICS</div>
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
                src="/images/subject.png"
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
      </div>
      <div className="px-4 lg:px-[100px]">
        <h2 className="mt-8 font-bold">Chemistry Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
          <div className="bg-white shadow cursor-pointer">
            <div className="">
              <img
                src="/images/subject.png"
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
                src="/images/subject.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">CODING</div>
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
                src="/images/subject.png"
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
                src="/images/subject.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">CHEMISTRY</div>
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
                src="/images/subject.png"
                className="w-full object-fit"
                alt="subject"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-[#758798] uppercase">PHYSICS</div>
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
                src="/images/subject.png"
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
            <h2 className="font-[600]">About the course</h2>
            <button onClick={closeModal}>
              <IoClose size="24px" />
            </button>
          </div>
          <div className="p-8">
            <div className="bg-[url('/public/images/subject.png')] bg-cover w-full h-64 p-12 text-white">
              <h2 className="font-bold mb-2">Python</h2>
              <p className="text-[12px] mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh
                quam odio sit vestibulum sagittis urna. Velit fermentum,
                accumsan, egestas sit volutpat.
              </p>
              <div className="flex items-center">
                <span>4.3</span>
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#F7F6F0" />
              </div>
              <p className="text-[12px] mb-2">Uploaded 08/08/2022</p>
              <p className="text-[18px] mb-2 font-bold">N1,000 /hr</p>
            </div>
            <div className="flex mt-4">
              <div className="w-[64px]">
                <img src="/images/tutor-avatar.png" alt="tutor" />
              </div>
              <div className="ml-4">
                <div className="text-small mb-1.5">Chukwudi Kamdibe</div>
                <div className="flex items-center mb-1.5">
                  <span className="text-[#758798]">62 courses</span>
                </div>
              </div>
            </div>
            <p className="mt-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh
              quam odio sit vestibulum sagittis urna.
            </p>
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
      </div>
    </DashboardLayout>
  );
};

export default Category;
