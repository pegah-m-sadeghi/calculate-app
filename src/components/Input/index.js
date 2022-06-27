import React from "react";
const Input = (props) => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-5 mt-10">
      <div className="">
        <label
          htmlFor={props.name}
          className="text-end text-sm font-medium text-gray-900 dark:text-gray-400orm-label"
        >
          {props.title}
        </label>
      </div>
      <input
        className="shadow appearance-none border rounded py-2 px-3 w-10/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handlechange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
