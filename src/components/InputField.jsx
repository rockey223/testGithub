import React from "react";

const InputField = ({name,label,change,id,type,placeholder,value}) => {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        onChange={(e) => {
          change(e.target);
        }}
        name={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
      />

      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
  );
};

export default InputField;
