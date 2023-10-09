import React from "react";

export const ColorfulMessage = (props) => {
  console.log("CloufulMessage");
  const contentStyle = {
    color: props.color,
    fontSize: "18px",
  };
  const message = props.message ? props.message : props.children;
  return <p style={contentStyle}>{message}</p>;
};
