import { useState, useEffect } from "react";
import Modal from "react-modal";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { getAllSubjects, getSubjectByID } from "../api/api";
import { formatDate2 } from "../utils/helpers";
import DateTimePicker from "react-datetime-picker";
import axios from "../api/axios";
import { BiCalendar } from "react-icons/bi";

Modal.setAppElement("#root");

const LearnCategory = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [viewSubjects, setViewSubjects] = useState([]);
  const [activeSubject, setActiveSubject] = useState({});
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
  const { setShowCourses } = props;

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

  const allSubjects = async () => {
    const res = await getAllSubjects();
    if (res.success) {
      setViewSubjects(res.data.pageItems);
    }
  };

  useEffect(() => {
    allSubjects();
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
        <div className="flex justify-between items-center p-4 border border-black/[0.16] border-bottom">
          <h2 className="font-[600]">About the course</h2>
          <button onClick={closeModal}>
            <IoClose size="24px" />
          </button>
        </div>
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
            About Tutor
          </h2>
        </div>
        <div className="pt-2 p-8">
          <div className="flex">
            <div className="w-[70px]">
              <img src={activeSubject.avatar} className="rounded-full" alt="tutor" />
            </div>
            <div className="ml-4">
              <div className="text-lg font-bold mb-1">{activeSubject.name}</div>
              <p>{activeSubject.noOfCourses}</p>
            </div>
          </div>
          <div className="my-6">
            <p>{activeSubject.bioNote}</p>
          </div>
          {showSchedule ? (
            <div className="mb-4">
              <h2
                className="text-pry font-bold cursor-pointer"
                onClick={() => setShowSchedule(false)}
              >
                Schedule Time
              </h2>
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
                className="text-pry font-bold cursor-pointer mt-4"
                onClick={() => setShowSchedule(true)}
              >
                Clear Schedule
              </h2>
            </div>
          )}
          <div className="border border-black/[0.08]">
            <div className="flex justify-between items-center px-2 py-3 border border-bottom border-black/[0.16]">
              <div className="font-bold">Ratings ({activeSubject.rating})</div>
            </div>
            <div>
              {activeSubject.tutorComments ? (
                <div className="p-2 border border-bottom border-black/[0.08] overflow-y-auto h-12">
                  {activeSubject.tutorComments.map((comment) => (
                    <div className="pb-2">
                      {comment ? <p>{comment}</p> : ""}
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
  );
};

export default LearnCategory;
