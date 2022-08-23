import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";


const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState("Tutor");
  const [subjects, setSubjects] = useState([]);
  const subjectArr = subjects.map((a) => a.subject);
  const availabilityArr = availabilities.map((a) => a.day);
  const [error, setError] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState({
    id: "",
    subject: "",
  });
  const [selectedAvailability, setSelectedAvailability] = useState({
    id: "",
    day: "",
  });

  const handleSubjectChange = (e) => {
    setSelectedSubjects({
      id: subjects[subjectArr.indexOf(e.target.value)].id,
      subject: e.target.value,
    });
  };

  const handleAvailabilityChange = (e) => {
    setSelectedAvailability({
      id: availabilities[availabilityArr.indexOf(e.target.value)].id,
      day: e.target.value,
    });
  };

  const response = axios.get("/Auth/Register");
  useEffect(() => {
    response
      .then((result) => result)
      .then((data) => setUserType(data.data.data.roles));
  }, []);
  useEffect(() => {
    response
      .then((result) => result)
      .then((data) => setAvailabilities(data.data.data.avaliabilities));
  }, []);
  useEffect(() => {
    response
      .then((result) => result)
      .then((data) => setSubjects(data.data.data.subjects));
  }, []);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const aboutRef = useRef(null);
  const handleSelectedType = (e) => {
    setSelectedUserType(e.target.value);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const subjects = [
        { id: selectedSubjects.id, subject: selectedSubjects.subject },
      ];
      const availabilities = [
        { id: selectedAvailability.id, day: selectedAvailability.day },
      ];
      const response = await axios.post(
        "/Auth/Register",
        JSON.stringify({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          role: selectedUserType,
          bio: selectedUserType === "Tutor" ? aboutRef.current.value : "",
          subjects: selectedUserType === "Tutor" ? subjects : "",
          avaliabilities: selectedUserType === "Tutor" ? availabilities : "",
        }),
        {
          headers: { "Content-Type": "application/json", accept: "*/*" },
        }
      );
      localStorage.setItem("email", emailRef.current.value);
      navigate("/verify");
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div className="text-[#21334F] container mx-auto py-10 md:py-20">
        <div className="md:w-[60%] px-4 mx-auto">
          <div>
            <img src="/images/logo.svg" className="mx-auto" alt="logo" />
          </div>
          <div className="bg-white mt-5 md:mt-10 py-6 md:py-16">
            <form
              className="md:w-2/4 px-6 mx-auto text-sm"
              onSubmit={handleSignUp}
            >
              <h3 className="text-lg font-bold">Create an account</h3>
              <p className="mb-10">
                Create your account to connect with students.
              </p>
              <div className="mt-4">
                <label>User Type</label>
                <select
                  className="block border w-full mt-2 py-3 px-2 mb-3 focus:outline-none"
                  value={selectedUserType}
                  onChange={handleSelectedType}
                  placeholder="Select"
                >
                  {userType.map((type, index) => (
                    <option value={type} index={index}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>First Name</label>
                <input
                  ref={firstNameRef}
                  className="block border w-full mt-2 py-3 px-2 mb-3 focus:outline-none"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  ref={lastNameRef}
                  className="block border w-full mt-2 py-3 px-2 mb-3 focus:outline-none"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  ref={emailRef}
                  className="block border w-full mt-2 py-3 px-2 mb-3 focus:outline-none"
                  type="email"
                  placeholder="Enter your last name"
                />
              </div>
              {selectedUserType === "Tutor" ? (
                <div>
                  <div className="mt-4">
                    <label>Tell Us About Yourself</label>
                    <textarea
                      className="block border w-full mt-2 py-3 px-2"
                      rows="1"
                      placeholder="Short Bio..."
                      ref={aboutRef}
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label>Availability</label>
                    <select
                      className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                      placeholder="Select"
                      onChange={handleAvailabilityChange}
                    >
                      {availabilityArr.map((days) => (
                        <option key={days}>{days}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-4">
                    <label>Subjects</label>
                    <select
                      className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                      placeholder="Select"
                      onChange={handleSubjectChange}
                    >
                      {subjectArr.map((subject) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="mt-4">
                <label>Password</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="password"
                  placeholder="Enter your password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                className="text-sm block bg-pry w-full py-3 text-white mt-6"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className="p-2 text-center mt-10 text-pry text-bold">{error}</div>
            <div className="text-center mt-10">
              Already have an account?{" "}
              <Link to="/login" className="text-[#17A1FA]">
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
