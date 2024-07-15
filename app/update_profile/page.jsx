"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import InputEditAbout from "../component/InputEditAbout";

// Horoscope function
const getHoroscope = (date) => {
  const month = date.getMonth() + 1; // Months are zero indexed
  const day = date.getDate();
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  return "";
};

// Chinese Zodiac function
const getChineseZodiac = (date, zodiacData) => {
  const birthDate = new Date(date);
  console.log(`Birthday: ${birthDate}`);

  for (const { start, end, zodiac } of zodiacData) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    console.log(`Checking range: ${startDate} to ${endDate} for ${zodiac}`);

    if (birthDate >= startDate && birthDate <= endDate) {
      return zodiac;
    }
  }
  return "Unknown";
};

const EditAbout = () => {
  const [birthday, setBirthday] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [zodiacData, setZodiacData] = useState([]);

  useEffect(() => {
    fetch("./zodiac.json")
      .then((response) => response.json())
      .then((data) => {
        setZodiacData(data);
        console.log("Zodiac data loaded:", data);
      })
      .catch((error) => console.error("Error loading zodiac data:", error));
  }, []);

  const handleBirthdayChange = (e) => {
    const date = new Date(e.target.value);
    setBirthday(e.target.value);
    setHoroscope(getHoroscope(date));
    setZodiac(getChineseZodiac(date, zodiacData));
  };

  return (
    <>
      <div className="max-w-[425px] min-h-[100vh] mx-auto border">
        <div className="bg-[#09141A] px-[15px] pt-[20px] min-h-[100vh] space-y-[30px]">
          <div className="flex relative">
            <a href="/profil">‹ Back</a>
            <p className="absolute left-1/2 -translate-x-1/2">@Username</p>
          </div>
          <div className="bg-[#162329] relative p-[15px] rounded-md h-[200px]">
            <p className="bottom-2 absolute">@Username,</p>
          </div>
          <form action="" className="relative">
            <div className="bg-[#0E191F] p-[10px] space-y-[20px] ">
              <div className="flex justify-between">
                <h3>About</h3>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="imageUpload"
                  className="bg-[#212B31] h-[50px] w-[50px] rounded-2xl relative cursor-pointer flex items-center justify-center"
                >
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[white] w-[25px]"
                  />
                </label>
                <p className="ml-[10px]">Add image</p>
              </div>
              <div className="space-y-[10px] content-field">
                <InputEditAbout
                  label="Display"
                  type="text"
                  placeholder="Enter display name"
                />
                <InputEditAbout
                  label="Gender"
                  type="select"
                  options={["Male", "Female"]}
                />
                <InputEditAbout
                  label="Birthday"
                  type="date"
                  value={birthday}
                  onChange={handleBirthdayChange}
                />
                <InputEditAbout
                  label="Horoscope"
                  type="text"
                  value={horoscope}
                  readOnly
                />
                <InputEditAbout
                  label="Zodiac"
                  type="text"
                  value={zodiac}
                  readOnly
                />
                <InputEditAbout
                  label="Height"
                  type="number"
                  placeholder="Enter height"
                />
                <InputEditAbout
                  label="Weight"
                  type="number"
                  placeholder="Enter weight"
                />
              </div>
              <button
                type="submit"
                className="absolute bg-transparent text-yellow-100 right-0 top-0"
              >
                Save Update
              </button>
            </div>
          </form>
          <div className="bg-[#0E191F] space-y-[20px] p-[10px]">
            <div className="flex justify-between">
              <h3>Interest</h3>
              <a href="/update_interest">
                <FontAwesomeIcon icon={faPen} className="w-[20px] ml-auto" />
              </a>
            </div>
            <div className="opacity-50 flex space-x-[20px]">
              {/* List interest */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAbout;
