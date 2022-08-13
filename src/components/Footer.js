import React from "react";

export const Footer = () => {
  const footerStyle = {
    position: "fixed",
    left: " 0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#3C4042",
    color: "white",
    textAlign: "right",
  };
  return (
    <div style={footerStyle}>
      <p style={{ marginRight: "40px" }}>
        Made by {""}
        <a style={{ color: "green" }} href="https://twitter.com/Ayushj_19">
          Ayush
        </a>
      </p>
    </div>
  );
};
