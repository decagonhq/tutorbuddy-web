import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

const StatusModal = ({
  status,
  setStatus,
  statusId,
  onRequest,
  onAccepted,
  onInProgress,
  onCompleted,
  onAbandoned,
  onCancel,
  handleStatusUpdate,
}) => {
  const handleCloseModal = () => {
    setStatus(false);
  };

  const testing = () => {
    onRequest();
    handleStatusUpdate();
    setStatus(false);
  };

  const onHandleAccepted = () => {
    onAccepted();
    handleStatusUpdate();
    setStatus(false);
  };

  const onHandleInProgress = () => {
    onInProgress();
    handleStatusUpdate();
    setStatus(false);
  };

  const onHandleInCompleted = () => {
    onCompleted();
    handleStatusUpdate();
    setStatus(false);
  };

  const onHandleAbandoned = () => {
    onAbandoned();
    handleStatusUpdate();
    setStatus(false);
  };

  const onHandleCancel = () => {
    onCancel();
    handleStatusUpdate();
    setStatus(false);
  };

  return (
    <>
      {status && statusId && (
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
              onClick={onHandleAccepted}
              className="mb-2 mt-4 text-[#FFC107] cursor-pointer"
            >
              Accepted
            </p>
            <hr />

            <p
              onClick={onHandleInProgress}
              className="mb-2 mt-4 text-[#FFC107] cursor-pointer"
            >
              Progress
            </p>
            <hr />

            <p
              onClick={onHandleInCompleted}
              className="mb-2 mt-4 text-[#14A800] cursor-pointer"
            >
              Completed
            </p>
            <hr />

            <p
              onClick={onHandleAbandoned}
              className="mb-2 mt-4 text-[#FD2959] cursor-pointer"
            >
              Abandoned
            </p>
            <hr />

            <p
              onClick={onHandleCancel}
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
