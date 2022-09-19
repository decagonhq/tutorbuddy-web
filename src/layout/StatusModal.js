import React from "react";
import { MdOutlineClose } from "react-icons/md";

const StatusModal = ({
  status,
  setStatus,
  statusId,
  testingChange
}) => {
  const handleCloseModal = () => {
    setStatus(false);
  };

  return (
    <>
      {status && statusId && (
        <div className="w-[375px] pb-8 fixed bg-white top-12">
          <div className="flex justify-between w-full p-4">
            <p>Change Status</p>
            <MdOutlineClose
              onClick={handleCloseModal}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </div>
          <hr />
          <div className="p-4">
            <p
              onClick={()=>testingChange(0)}
              className="mb-2 mt-4 cursor-pointer"
            >
              Requested
            </p>
            <hr />

            <p
              onClick={()=>testingChange(1)}
              className="mb-2 mt-4 text-sky-600 cursor-pointer"
            >
              Accepted
            </p>
            <hr />

            <p
              onClick={()=>testingChange(2)}
              className="mb-2 mt-4 text-[#FFC107] cursor-pointer"
            >
              Progress
            </p>
            <hr />

            <p
              onClick={()=>testingChange(3)}
              className="mb-2 mt-4 text-[#14A800] cursor-pointer"
            >
              Completed
            </p>
            <hr />

            <p
              onClick={()=>testingChange(4)}
              className="mb-2 mt-4 text-[#FD2959] cursor-pointer"
            >
              Abandoned
            </p>
            <hr />

            <p
              onClick={()=>testingChange(5)}
              className="mb-2 mt-4 text-[#FD2959] cursor-pointer"
            >
              Canceled
            </p>
            <hr />
          </div>
        </div>
      )}
    </>
  );
};

export default StatusModal;
