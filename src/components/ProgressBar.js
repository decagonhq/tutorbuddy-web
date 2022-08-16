import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;
  const containerStyles = {
    height: 4,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "0px 16px 60px 16px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#34A853",
    borderRadius: "inherit",
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span></span>
      </div>
      {completed === 100 ? (
        <p style={{ color: "#B3B3B3" }}>Complete</p>
      ) : (
        <p style={{ color: "#B3B3B3" }}>Your progress</p>
      )}
    </div>
  );
};

export default ProgressBar;
