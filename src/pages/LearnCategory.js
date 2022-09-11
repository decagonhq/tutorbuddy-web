import { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import AuthContext from "../context/auth/authContext";
import { getAllSubjects } from "../api/api";

Modal.setAppElement("#root");

const LearnCategory = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [viewSubjects, setViewSubjects] = useState([]);
  const { userDetails } = useContext(AuthContext);
  const { setShowCourses } = props;

  const openModal = async (id) => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const allSubjects = async () => {
    const res = await getAllSubjects();
    if (res.success) {
      setViewSubjects(res.data.pageItems);
    }
  };

  useEffect(() => {
    allSubjects();
  }, []);
  return (
    <>
      <div
        className="flex cursor-pointer mt-8"
        onClick={() => setShowCourses(false)}
      >
        <BsArrowLeft size="22px" className="mr-2" />
        Back
      </div>
      {viewSubjects.length > 0 ? (
        viewSubjects.map((cat) => (
          <div key={cat.categoryId} className="mt-12">
            <h2 className="mt-8 font-bold">{cat.categoryName}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[20px]">
              {cat.subject.map((course) => (
                <div
                  key={course._id}
                  className="flex flex-col bg-white shadow cursor-pointer"
                  onClick={openModal}
                >
                  <div className="mb-2">
                    <img
                      src={course.thumbnail}
                      className="w-full h-[161px]"
                      alt="subject"
                    />
                  </div>

                  <div className="p-4">
                    <div className="text-sm text-[#758798] uppercase">
                      {course.subject}
                    </div>
                    <p className="text-xs">{course.description}</p>
                    <div className="text-[#21334F] mb-2">
                      {course.tutor ? course.tutor : "NIL"}
                    </div>
                    <div className="flex items-center">
                      <span>{course.rate}</span>
                      {Array(5)
                        .fill(0)
                        .map((item, i) => {
                          if (course.rate > i) {
                            return <AiFillStar color="#FFC107" key={i} />;
                          } else {
                            return <AiOutlineStar color="#f0f0f0" key={i} />;
                          }
                        })}
                      <span>(10)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No course at the moment</p>
      )}

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
            <div className="w-[70px]">
              <img src="./images/tutor-avatar.png" widthalt="tutor" />
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
              quam odio sit vestibulum sagittis urna. Velit fermentum, accumsan,
              egestas sit volutpat.
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
    </>
  );
};

export default LearnCategory;
