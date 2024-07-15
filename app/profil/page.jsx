import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Profil = () => {
  return (
    <>
      <div className="max-w-[425px] min-h-[100vh] mx-auto border">
        <div className="bg-[#09141A] px-[15px] pt-[20px] h-[100vh] space-y-[30px]">
          <div className="flex justify-between">
            <a href="/profil">‹ Back</a>
            <p className="text-center">@Username</p>
            <a href="">
              <FontAwesomeIcon icon={faEllipsis} className="w-[20px]" />
            </a>
          </div>
          <div className="bg-[#162329] relative p-[15px] rounded-md h-[200px]">
            <p className="bottom-2 absolute">@Username,</p>
          </div>
          <div className="bg-[#0E191F] space-y-[10px] p-[10px]">
            <div className="flex justify-between">
              <h3>About</h3>
              <a href="/update_profile">
                <FontAwesomeIcon icon={faPen} className="w-[20px]" />
              </a>
            </div>
            <div className="flex">
              {/* Display, Gender, Birthday, Horoscope, Zodiac, Height, Weight */}
            </div>
          </div>
          <div className="bg-[#0E191F] space-y-[20px] p-[10px]">
            <div className="flex justify-between">
              <h3>Interest</h3>
              <a href="/update_interest">
                <FontAwesomeIcon icon={faPen} className="w-[20px]" />
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

export default Profil;
