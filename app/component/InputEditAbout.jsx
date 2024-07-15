import React from "react";

const InputEditAbout = ({
  label,
  type,
  placeholder,
  options,
  value,
  onChange,
  readOnly,
}) => {
  return (
    <div className="flex justify-between">
      <label className="mb-2">{label}</label>
      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="p-2 border rounded w-[60%]"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className="p-2 border rounded w-[60%]"
        />
      )}
    </div>
  );
};

export default InputEditAbout;
