import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const Error = ({ error }) => {
  return (
    <div>
      {error.map((err, ind) => (
        <div
          key={ind}
          className="flex items-center text-pry p-1"
        >
          <BiErrorCircle />
          <p className="ml-2">{err}</p>
        </div>
      ))}
    </div>
  );
};

export default Error;
