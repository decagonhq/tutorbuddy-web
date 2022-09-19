import { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import DateTimePicker from "react-datetime-picker";
import AuthContext from "../context/auth/authContext";
import DashboardLayout from "../layout/DashboardLayout";
import LearnCategory from "./LearnCategory";
import {
  getFeaturedTutors,
  getTutor,
  getAllRecommendedSubjects,
  getSubjectByID,
} from "../api/api";
import { formatDate2 } from "../utils/helpers";
import axios from "../api/axios";

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
  const [start, setStart] = useState(new Date().toISOString());
  const [end, setEnd] = useState(new Date().toISOString());
  const [showSchedule, setShowSchedule] = useState(true);
  const [tutorSubjectId, setTutorSubjectId] = useState("");
  const [error, setError] = useState("");
  const [sessionTutor, setSessionTutor] = useState("");

  
  const startDate = (date) => {
    setStart(new Date(date).toISOString());
  };

  const endDate = (date) => {
    setEnd(new Date(date).toISOString());
  };
  
  const openModal = async (id) => {
    setTutorSubjectId(id);
    const subject = await getSubjectByID(id);
    if (subject.success) {
      setSessionTutor(subject.data.name);
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
    if (res.data && res.success) {
      setTutors(res.data);
    }
  };

  const recommendedCourses = async () => {
    const res = await getAllRecommendedSubjects();
    if (res.success) {
      setRecommendCourses(res.data.pageItems);
    }
  };

  useEffect(() => {
    featuredTutors();
    recommendedCourses();
  }, []);

  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);

  const handleSessionCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/Session",
        JSON.stringify({
          tutorSubjectId: tutorSubjectId,
          studentId: user.id,
          startTime: start,
          endTime: end,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      localStorage.setItem("sessionTutor", sessionTutor);
      navigate("/request-sent");
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };
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
                          className="object-fit rounded-full"
                          alt={el.fullname}
                        />
                      </div>
                      <p>{el.fullname.substring(0, 8)}...</p>
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
              <div className="flex justify-between items-center p-4 border border-black/[0.16] border-bottom">
                <h2 className="font-[600]">About the course</h2>
                <button onClick={closeModal}>
                  <IoClose size="24px" />
                </button>
              </div>
              {/* <div
                style={{ "var(--image-url)": activeSubject.thumbnail }}
                className="p-8 pt-4 mb-4 bg-[image:var(--image-url)] w-full h-[161px] relative"
              > */}
              <div
                style={{ backgroundImage: `url(${activeSubject.thumbnail})` }}
                className="w-full h-[190px] bg-cover bg-center bg-no-repeat text-white"
              >
                <div className="bg-gradient-to-b from-black opacity-90 p-8 pt-4 mb-4">
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
              </div>
              <div className="m-8 mb-4">
                <h2 className="font-[600] border-b border-black/[0.16] pb-2 w-1/2">
                  About the Tutor
                </h2>
              </div>
              <div className="pt-2 p-8">
                <div className="flex">
                  <div className="w-[70px]">
                    <img src={activeSubject.avatar} className="rounded-full" alt="tutor" />
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
                {showSchedule ? (
                  <div
                    className="mb-4 flex items-center cursor-pointer"
                    onClick={() => setShowSchedule(false)}
                  >
                    <BiCalendar className="mr-2" size={20} color="#dc2626" />
                    <h2 className="text-[#dc2626] font-bold">Schedule Time</h2>
                  </div>
                ) : (
                  <div className="mb-4">
                    <p>Start Date</p>
                    <DateTimePicker
                      calendarIcon={<BiCalendar className="mr-2" size={20} />}
                      onChange={startDate}
                      value={new Date(start)}
                      format="yyyy-MM-dd h:mm:ss a"
                    />
                    <p>End Date</p>
                    <DateTimePicker
                      calendarIcon={<BiCalendar className="mr-2" size={20} />}
                      onChange={endDate}
                      value={new Date(end)}
                      format="yyyy-MM-dd h:mm:ss a"
                    />
                    <h2
                      className="text-[#dc2626] font-bold cursor-pointer mt-4"
                      onClick={() => setShowSchedule(true)}
                    >
                      Clear Schedule
                    </h2>
                  </div>
                )}
                <div className="border border-black/[0.08]">
                  <div className="flex justify-between items-center px-2 py-3 border border-bottom border-black/[0.16]">
                    <div className="font-bold">
                      Ratings ({activeSubject.rating})
                    </div>
                  </div>
                  <div>
                    {activeSubject.tutorComments ? (
                      <div className="p-2 border border-bottom border-black/[0.08] overflow-y-auto h-12">
                        {activeSubject.tutorComments.map((comment) => (
                          <div className="pb-2">
                            <p>{comment}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No Comments Yet</p>
                    )}
                  </div>
                </div>
                <div className="mt-4 text-pry font-bold">{error}</div>
                <button
                  onClick={handleSessionCreate}
                  className="bg-pry py-3 text-white w-full md:w-320px mt-6"
                >
                  Engage Tutors
                </button>
              </div>
            </Modal>
          </>
        ) : (
          <LearnCategory setShowCourses={setShowCourseByCategory} />
        )}
        {/* <Pagination /> */}
      </div>
    </DashboardLayout>
  );
};

export default Learn;
