import React from "react";

const SelectBar = (props) => {
  return (
    <div className="grid grid-cols-2 gap-2 px-6">
      <div className="mb-5 mt-6">
        <label
          htmlFor={props.name}
          className="w-1/2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          {" "}
          {props.title}
        </label>
      </div>
      <div className="">
        <select
          className="bg-gray-50 mb-5 mt-5 w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.handlechange}
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.options.map((option) => {
            return (
              <option key={option.key} value={option.key} label={option.value}>
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectBar;
