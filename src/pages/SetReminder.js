import { useState, useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Picker from "react-scrollable-picker";
import _range from "lodash/range";
import DashboardLayout from "../layout/DashboardLayout";
import AuthContext from "../context/auth/authContext";
import DateTimePicker from "react-datetime-picker";
import { BiCalendar, BiErrorCircle } from "react-icons/bi";
import axios from "axios";

const days = _range(1, 32).map((item) => {
  return {
    value: item.length === 1 ? item.padStart(2, 0) : item,
    label: item.length === 1 ? item.padStart(2, 0) : item,
  };
});

const month = _range(1, 13).map((item) => {
  return {
    value: item.length === 1 ? item.padStart(2, 0) : item,
    label: item.length === 1 ? item.padStart(2, 0) : item,
  };
});

const hour = _range(1, 13).map((item) => {
  return {
    value: item.length === 1 ? item.padStart(2, 0) : item,
    label: item.length === 1 ? item.padStart(2, 0) : item,
  };
});

const minute = _range(1, 61).map((item) => {
  return {
    value: item.length === 1 ? item.padStart(2, 0) : item,
    label: item.length === 1 ? item.padStart(2, 0) : item,
  };
});

const valueGroups = {
  days: 5,
  month: 5,
  hour: 5,
  minute: 5,
  period: "AM",
};

const optionGroups = {
  days,
  month,
  hour,
  minute,
  period: [
    { value: "AM", label: "AM" },
    { value: "PM", label: "PM" },
  ],
};

const SetReminder = () => {
  const [vGroup, setVGroup] = useState(valueGroups);
  const [start, setStart] = useState(new Date().toISOString());
  const [end, setEnd] = useState(new Date().toISOString());
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState("");
  const { userDetails } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log({ title, start, end, note });

  const startDate = (date) => {
    setStart(new Date(date).toISOString());
  };

  const endDate = (date) => {
    setEnd(new Date(date).toISOString());
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setInputErrors("");
  };

  const handleNote = (e) => {
    setNote(e.target.value);
    setInputErrors("");
  };

  const handleChange = (name, value) => {
    setVGroup({
      ...vGroup,
      [name]: value,
    });
  };

  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);

  function validate(title, note) {
    const errors = [];

    if (title.length === 0) {
      errors.push("Title can't be empty");
    }

    if (note.length === 0) {
      errors.push("Note can't be empty");
    }

    return errors;
  }
  console.log("ERRORS", inputErrors);

  const handleReminderCreate = async (e) => {
    e.preventDefault();
    try {
      const errors = validate(title, note);
      if (errors.length > 0) {
        setInputErrors({ errors });
        return;
      }
      const response = await axios.post(
        `https://api.tutorbuddy.net/api/Student/${user.id}/add-reminder`,
        JSON.stringify({
          title: title,
          note: note,
          startTime: start,
          endTime: end,
          provider: "web",
        }),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      navigate("/reminder_history");
    } catch (error) {
      console.log("ERROR", error)
      setError(error?.response?.data?.message);
    }
  };

  return (
    <DashboardLayout userDetails={userDetails}>
      <div className="pt-8">
        <div className="md:w-[46%] mx-auto">
          <div className="bg-white mt-5 mb-5 md:mb-1 md:mt-1 py-6 md:py-8 border-2 border-[#BCCACE]-600">
            <div className="md:w-4/8 px-6 md:px-8 mx-auto text-sm">
              <Link
                to="/reminder_board"
                className="items-startcursor-pointer bg-[#f7f7f7] w-auto inline-block py-2 px-4 rounded-full"
              >
                <div className="flex">
                  <BsArrowLeft size="22px" className="mr-2" />
                  Back
                </div>
              </Link>

              <div className="mt-8">
                <label>Title</label>
                <input
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="text"
                  placeholder="Type a title"
                  onChange={handleTitle}
                  value={title}
                />
              </div>

              <p className="mt-8">Start Date</p>
              <DateTimePicker
                calendarIcon={<BiCalendar className="mr-2" size={20} />}
                onChange={startDate}
                value={new Date(start)}
                format="yyyy-MM-dd h:mm:ss a"
              />
              <p className="mt-4">End Date</p>
              <DateTimePicker
                calendarIcon={<BiCalendar className="mr-2" size={20} />}
                onChange={endDate}
                value={new Date(end)}
                format="yyyy-MM-dd h:mm:ss a"
              />

              {/* <div className="mt-8">
                <div>Date and Time</div>
                <div className="flex justify-evenly align-center w-full mt-2 py-3 text-red-500 font-bold">
                  <div>Day</div>
                  <div>Month</div>
                  <div>Hour</div>
                  <div>Minute</div>
                  <div></div>
                </div>
                <Picker
                  optionGroups={optionGroups}
                  valueGroups={vGroup}
                  onChange={handleChange}
                />
              </div> */}

              <div className="mt-8">
                <label>Note</label>
                <textarea
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="text"
                  placeholder="Write your important note..."
                  rows={6}
                  onChange={handleNote}
                  value={note}
                />
              </div>

              <Link to="/reminder_history">
                <button
                  onClick={handleReminderCreate}
                  className="text-sm block rounded bg-pry w-full py-3 text-white mt-6"
                >
                  Save
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SetReminder;
