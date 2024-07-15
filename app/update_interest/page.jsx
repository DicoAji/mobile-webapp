"use client";
import React, { useState } from "react";
import Select from "react-select";
// import { fetchZodiac } from "../api";

const InterestPage = () => {
  const options = [
    { value: "musik", label: "Musik" },
    { value: "basketball", label: "Basketball" },
    { value: "fitnes", label: "Fitnes" },
    { value: "gymming", label: "Gymming" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected interests:", selectedOptions);
  };

  return (
    <div className="max-w-[425px] min-h-[100vh] mx-auto border">
      <div className="bg-radial h-[100vh] relative p-[15px]">
        <a href="/update_profile">‹ Back</a>
        <p className="text-yellow-100 mb-[10px] mt-[100px]">
          Tell everyone about yourself
        </p>
        <h3>What interest you?</h3>
        <form onSubmit={handleSubmit} className="mt-[25px]">
          <Select
            isMulti
            name="interests"
            options={options}
            className="basic-multi-select w-full"
            classNamePrefix="select"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="text-cyan-400 bg-transparent absolute right-0 top-0"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterestPage;
