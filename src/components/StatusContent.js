import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const StatusContent = ({
  handleCloseModal,
  onRequest,
  onAccepted,
  onInProgress,
  onCompleted,
  onAbandoned,
  onCancel,
  handleStatusUpdate,
}) => {
  const testing = () => {
    onRequest();
    handleStatusUpdate();
  };
  return (
    <div className="w-[375px] pb-8 absolute z-100 bg-white top-12">
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
          onClick={testing}
          className="mb-2 mt-4 text-[#FFC107] cursor-pointer"
        >
          Requested
        </p>
        <hr />

        <p
          onClick={onAccepted}
          className="mb-2 mt-4 text-[#FFC107] cursor-pointer"
        >
          Accepted
        </p>
        <hr />

        <p
          onClick={onInProgress}
          className="mb-2 mt-4 text-[#FFC107] cursor-pointer"
        >
          Progress
        </p>
        <hr />

        <p
          onClick={onCompleted}
          className="mb-2 mt-4 text-[#14A800] cursor-pointer"
        >
          Completed
        </p>
        <hr />

        <p
          onClick={onAbandoned}
          className="mb-2 mt-4 text-[#FD2959] cursor-pointer"
        >
          Abandoned
        </p>
        <hr />

        <p
          onClick={onCancel}
          className="mb-2 mt-4 text-[#FD2959] cursor-pointer"
        >
          Canceled
        </p>
        <hr />
      </div>
    </div>
  );
};

export default StatusContent;
