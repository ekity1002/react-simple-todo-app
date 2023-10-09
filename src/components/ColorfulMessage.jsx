import React from "react";

const ColorfulMessage = (props) => {
  console.log("CloufulMessage");
  const contentStyle = {
    color: props.color,
    fontSize: "18px",
  };
  const message = props.message ? props.message : props.children;
  return <p style={contentStyle}>{message}</p>;
};
export default ColorfulMessage;
