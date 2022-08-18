import React, { useState, useEffect } from "react";

const StatusModal = ({ status, setStatus, children }) => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setStatus(false);
    setOpen(false);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleCloseModal });
    }
    return child;
  });
  useEffect(() => {
    if (status) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [status]);
  return <>{open ? <>{childrenWithProps}</> : null}</>;
};

export default StatusModal;
