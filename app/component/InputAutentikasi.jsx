import React from "react";

const InputAutentikasi = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="w-full text-gray-50"
      placeholder={placeholder}
    />
  );
};

export default InputAutentikasi;
