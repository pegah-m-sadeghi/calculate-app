import React from "react";

const Button = (props) => {
  return (
    <button
      //   style={props.style}
      className="bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
