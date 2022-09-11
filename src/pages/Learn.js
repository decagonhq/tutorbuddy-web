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
import AuthContext from "../context/auth/authContext";
import DashboardLayout from "../layout/DashboardLayout";
import LearnCategory from "./LearnCategory";
import Pagination from "../components/global/Pagination";
import {
  getFeaturedTutors,
  getTutor,
  getAllRecommendedSubjects,
  getSubjectByID,
} from "../api/api";
import { formatDate2 } from "../utils/helpers";

Modal.setAppElement("#root");

const Learn = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalFeaturedTutors, setFeaturedTutors] = useState(false);
  const [showCourseByCategory, setShowCourseByCategory] = useState(false);
  const [tutors, setTutors] = useState([]);
  const [activeSubject, setActiveSubject] = useState({});
  const [userModal, setUserModal] = useState({});
  const [recommendCourses, setRecommendCourses] = useState([]);
  const { userDetails } = useContext(AuthContext);

  const openModal = async (id) => {
    const subject = await getSubjectByID(id);
    console.log(subject);
    if (subject.success) {
      setActiveSubject(subject.data);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openFeatureTutor = async (id) => {
    setFeaturedTutors(true);
    const getTutorDetails = await getTutor(id);
    console.log(getTutorDetails);
    setUserModal(getTutorDetails.data);
  };

  const closeFeatureTutor = async () => {
    setFeaturedTutors(false);
  };

  const showCourseByCategories = async () => {
    setShowCourseByCategory(true);
  };

  const featuredTutors = async () => {
    const res = await getFeaturedTutors();
    console.log(res);
    if (res.data && res.success) {
      setTutors(res.data);
    }
  };

  const recommendedCourses = async () => {
    const res = await getAllRecommendedSubjects();
    console.log(res);
    if (res.success) {
      setRecommendCourses(res.data.pageItems);
    }
  };

  useEffect(() => {
    featuredTutors();
    recommendedCourses();
  }, []);
  console.log(recommendCourses, activeSubject);
  return (
    <DashboardLayout userDetails={userDetails}>
      {!showCourseByCategory ? (
        <div className="bg-red-100 w-full flex justify-between items-center px-4 lg:px-[100px] py-10">
          <div>
            <p className="text-2xl font-light">Welcome</p>
            <h4 className="text-3xl font-bold">
              {userDetails.name} {userDetails.surname}
            </h4>
          </div>
          <div>
            <input
              type="text"
              className="border border-[#BCCACE] w-full py-2 px-6 md:mr-1 focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      ) : (
        <div className="bg-red-100 w-full flex flex-col px-4 lg:px-[100px] py-10">
          <div>
            <p className="text-2xl font-bond mb-8">All Courses</p>
          </div>
          <div>
            <input
              type="text"
              className="border border-[#BCCACE] w-[80%] py-2 px-6 md:mr-1 focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      )}
      <div className="px-4 lg:px-[100px]">
        {!showCourseByCategory ? (
          <>
            <h2 className="mt-8 font-bold">Featured Tutors</h2>
            <div className="mt-8 flex overflow-auto whitespace-nowrap">
              {tutors?.length > 0
                ? tutors.map((el) => (
                    <div
                      key={el.id}
                      className="mr-8 inline-block cursor-pointer"
                      onClick={() => openFeatureTutor(el.id)}
                    >
                      <div className="w-[68px]">
                        <img
                          src={el.avatar}
                          className="object-fit"
                          alt={el.fullname}
                        />
                      </div>
                      <p>{el.fullname}</p>
                      <div className="flex justify-start items-center">
                        <AiFillStar color="#FFC107" />
                        <p>{el?.rate}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className="flex justify-between">
              <h2 className="mt-8 font-bold">Recommended Courses</h2>
              <h3
                className="mt-8 font-bold text-[#FD2959] cursor-pointer"
                onClick={showCourseByCategories}
              >
                See all
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
              {recommendCourses?.length > 0 ? (
                recommendCourses.map((course) => (
                  <div
                    className="flex flex-col bg-white shadow cursor-pointer"
                    onClick={() => openModal(course.tutorSubjectId)}
                  >
                    <div className="mb-2">
                      <img
                        src={course.thumbnail}
                        className="w-full h-[161px]"
                        alt="subject"
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-sm text-[#758798] uppercase">
                        {course.subject}
                      </p>
                      <p className="text-xs">{course.description}</p>
                      <p className="text-[#21334F] mb-2">
                        {course.tutor ? course.tutor : "NIL"}
                      </p>
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
                ))
              ) : (
                <p>No Courses to show for now</p>
              )}
            </div>

            <Modal
              isOpen={modalFeaturedTutors}
              onRequestClose={closeFeatureTutor}
              className="w-full md:w-[694px] bg-gray-50 absolute bottom-0 md:bottom-2/4 right-2/4 transform translate-x-2/4 md:translate-y-2/4 shadow-sm outline-none overflow-auto"
              overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-40"
              contentLabel="Example Modal"
            >
              <div className="flex justify-between items-center p-8 border border-black/[0.16] border-bottom">
                <h2 className="font-[600]">Tutor Profile</h2>
                <button onClick={closeFeatureTutor}>
                  <IoClose size="24px" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex">
                  <div className="w-[90px]">
                    <img src={userModal.avatar} alt="tutor" />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold mb-1.5">
                      {userModal.fullName}
                    </div>
                    <div className="flex items-center mb-1.5">
                      <AiOutlineSafetyCertificate color="#14A800" size="18px" />{" "}
                      <span className="text-[#758798] ml-1.5">
                        Certified Tutor
                      </span>
                    </div>
                    <div className="flex items-center">
                      <GoLocation />{" "}
                      <span className="text-[#758798] ml-1.5">
                        Lagos, Nigeria
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-6">
                  <h3 className="font-bold mb-2">About</h3>
                  <p>{userModal.bioNote ? userModal.bioNote : "NIL"}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div className="md:w-[40%] md:mb-4">
                    <h3 className="font-bold mb-2">Expertise</h3>
                    <div className="flex">
                      {userModal.subject?.length > 0
                        ? userModal.subject?.map((sub, ind) => (
                            <div
                              key={ind}
                              className="bg-black/[0.03] px-2 py-1 rounded-[40px] mr-2"
                            >
                              {sub}
                            </div>
                          ))
                        : "NIL"}
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
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
              <div
                style={{ "var(--image-url)": activeSubject.thumbnail }}
                className="p-8 pt-4 mb-4 bg-[image:var(--image-url)] w-full h-[161px] relative"
              >
                <h2 className="font-[600] my-2">{activeSubject.topic}</h2>
                <p className="text-sm my-2">{activeSubject.description}</p>
                <div className="flex items-center my-2">
                  <span>{activeSubject.rating}</span>
                  {Array(5)
                    .fill(0)
                    .map((item, i) => {
                      if (activeSubject.rating > i) {
                        return <AiFillStar color="#FFC107" key={i} />;
                      } else {
                        return <AiOutlineStar color="#f0f0f0" key={i} />;
                      }
                    })}
                </div>
                <p className="text-xs">
                  Uploaded {formatDate2(activeSubject.createdAt)}
                </p>
                <p className="text-xs">
                  ₦{activeSubject.price} /{activeSubject.unitOfPrice}
                </p>
              </div>
              <div className="m-8 mb-4">
                <h2 className="font-[600] border-b border-black/[0.16] pb-2 w-1/2">
                  About Tutor
                </h2>
              </div>
              <div className="pt-2 p-8">
                <div className="flex">
                  <div className="w-[70px]">
                    <img src="./images/tutor-avatar.png" alt="tutor" />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold mb-1">
                      {activeSubject.name}
                    </div>
                    <p>{activeSubject.noOfCourses}</p>
                  </div>
                </div>
                <div className="my-6">
                  <p>{activeSubject.bioNote}</p>
                </div>
                <div className="border border-black/[0.08]">
                  <div className="flex justify-between items-center px-2 py-3 border border-bottom border-black/[0.16]">
                    <div className="font-bold">
                      Ratings ({activeSubject.rating})
                    </div>
                    <Link
                      className="px-2 py-1 font-[600] text-pry bg-pry/[0.1] rounded"
                      to="/rate/1"
                    >
                      Rate Tutor
                    </Link>
                  </div>
                  <div>
                    {activeSubject.tutorComments > 0 ? (
                      <div className="p-2 border border-bottom border-black/[0.08]">
                        <h6>Awesome tutor</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.{" "}
                        </p>
                      </div>
                    ) : (
                      <p>No Comments Yet</p>
                    )}
                  </div>
                </div>
                <button className="bg-pry py-3 text-white w-full md:w-320px mt-6">
                  Engage Tutors
                </button>
              </div>
            </Modal>
          </>
        ) : (
          <LearnCategory setShowCourses={setShowCourseByCategory} />
        )}
        <Pagination />
      </div>
    </DashboardLayout>
  );
};

export default Learn;
