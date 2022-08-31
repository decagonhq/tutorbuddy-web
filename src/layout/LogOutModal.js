import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const LogOutModal = ({ modalButton, children }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const handleAcceptModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleclosemodal = () => {
    setModalOpen(false);
  };
  const logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleclosemodal, logOut });
    }
    return child;
  });
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={ModalStyle}
      >
        {childrenWithProps}
      </Modal>
      <div onClick={() => handleAcceptModal()}>{modalButton}</div>
    </>
  );
};

const ModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "40%",
    left: "35%",
    right: "auto",
    bottom: "auto",
  },
};

export default LogOutModal;
