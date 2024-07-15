import React from "react";

const ButtonAutentikasi = ({ type, text }) => {
  return (
    <button type={type} className="w-full font-bold">
      {text}
    </button>
  );
};

export default ButtonAutentikasi;
