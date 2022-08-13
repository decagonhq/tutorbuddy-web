// import { Link } from "react-router-dom"
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Picker from "react-scrollable-picker";
import _range from "lodash/range";
import DashboardLayout from "../layout/DashboardLayout";

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

  console.log("RESULT", vGroup);
  const handleChange = (name, value) => {
    setVGroup({
      ...vGroup,
      [name]: value,
    });
  };
  return (
    <DashboardLayout>
      <div>
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
                />
              </div>

              <div className="mt-8">
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
              </div>

              <div className="mt-8">
                <label>Note</label>
                <textarea
                  className="block border w-full mt-2 py-3 px-2 focus:outline-none"
                  type="text"
                  placeholder="Write your important note..."
                  rows={6}
                />
              </div>

              <Link to="/reminder_history">
                <button className="text-sm block rounded bg-pry w-full py-3 text-white mt-6">
                  Save
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SetReminder;
