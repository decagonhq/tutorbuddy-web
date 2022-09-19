import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { MultiSelect } from "react-multi-select-component";
import { BiErrorCircle } from "react-icons/bi";

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState("Tutor");
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [inputErrors, setInputErrors] = useState("");

  const newAvailabilities = availabilities.map(
    ({ day: label, id: value, ...rest }) => ({
      label,
      value,
      ...rest,
    })
  );
  const newSubjects = subjects.map(
    ({ subject: label, id: value, ...rest }) => ({
      label,
      value,
      ...rest,
    })
  );

  const revertAvailabilities = selectedAvailability.map(
    ({ label: day, value: id, ...rest }) => ({
      id,
      day,
      ...rest,
    })
  );

  const revertSubjects = selectedSubjects.map(
    ({ label: subject, value: id, ...rest }) => ({
      id,
      subject,
      ...rest,
    })
  );

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

  const subjectForTutor =
    selectedUserType === "Tutor" ? `subjects: ${revertSubjects}` : null;
  const availabilityForTutor =
    selectedUserType === "Tutor"
      ? `avaliabilities: ${revertAvailabilities}`
      : null;

  function validate(
    firstName,
    lastName,
    email,
    about,
    availability,
    subject,
    password
  ) {
    const errors = [];

    if (firstName.length === 0) {
      errors.push("First Name can't be empty");
    }

    if (lastName.length === 0) {
      errors.push("Last Name can't be empty");
    }
    if (email.length === 0) {
      errors.push("Email can't be empty");
    }

    if (about.length === 0) {
      errors.push("About can't be empty");
    }
    if (availability.length === 0) {
      errors.push("Select one or more availability");
    }

    if (subject.length === 0) {
      errors.push("Select one or more subjects");
    }
    if (password.length === 0) {
      errors.push("Password can't be empty");
    }

    return errors;
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const errors = validate(
        firstNameRef.current.value,
        lastNameRef.current.value,
        emailRef.current.value,
        aboutRef.current.value,
        availabilityForTutor,
        subjectForTutor,
        passwordRef.current.value
      );
      if (errors.length > 0) {
        setInputErrors({ errors });
        return;
      }
      const response = await axios.post(
        "/Auth/Register",
        JSON.stringify({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          role: selectedUserType,
          bio: selectedUserType === "Tutor" ? aboutRef.current.value : "",
          subjectForTutor,
          availabilityForTutor,
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
                    <MultiSelect
                      options={newAvailabilities}
                      value={selectedAvailability}
                      onChange={setSelectedAvailability}
                      labelledBy="Select Availabilities"
                    />
                  </div>
                  <div className="mt-4">
                    <label>Subjects</label>
                    <MultiSelect
                      options={newSubjects}
                      value={selectedSubjects}
                      onChange={setSelectedSubjects}
                      labelledBy="Select Subjects"
                    />
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
                />
              </div>
              <button
                className="text-sm block bg-pry w-full py-3 text-white mt-6"
                type="submit"
              >
                Sign Up
              </button>
              {inputErrors?.errors?.map((error) => (
                  <div
                    key={error}
                    className="flex items-center text-pry p-1 mt-2"
                  >
                    <BiErrorCircle />
                    <p className="ml-2">{error}</p>
                  </div>
                ))}
              <div className="p-2 text-center mt-10 text-pry text-bold">
                {error}
              </div>
            </form>
            <div className="text-center">
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
