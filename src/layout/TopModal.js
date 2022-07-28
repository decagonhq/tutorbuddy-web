import React, { useState } from "react";
import Modal from "react-modal";

const TopModal = ({ modalButton, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleAcceptModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={ModalStyle}
      >
        {children}
      </Modal>
      <div onClick={() => handleAcceptModal()}>{modalButton}</div>
    </>
  );
};

const ModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    content: {
      top: "10%",
      left: "auto",
      right: "10%",
      bottom: "auto",
    },
  };

export default TopModal;
