import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  console.log({ props });
  const contentStyle = {
    color: props.color,
    fontSize: "18px",
  };
  const message = props.message ? props.message : props.children;
  return <p style={contentStyle}>{message}</p>;
};
export default ColorfulMessage;
