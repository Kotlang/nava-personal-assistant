import React, { useEffect, useState } from "react";
import AiProfile from "../assets/AiProfile.png";
import ayushProfile from "../assets/ayushProfile.png";
import profileMore from "../assets/profileMore.svg";
import Cookies from "js-cookie";
const ProfileHeader = () => {

    const [username, setUsername] = useState("");

    useEffect(() => {
        const userdata = Cookies.get("userdata");
        if (userdata) {
            let parsedData = JSON.parse(userdata);
            let username = parsedData.username;
            setUsername(username);
        }
    }, []); 

  return (
    <div className=" text-white p-5">
      <div className="p-1 flex flex-row justify-between items-center">
        <div className="self-center">
          <img src={AiProfile} alt="add" className="w-7 inline " />
          <p className="text-sm inline ml-4">Ai Assistant</p>
        </div>
        <div className="flex flex-row gap-3 items-center px-4 py-[6px] bg-[#171717] border-2 border-border_white rounded-md ">
          <div className=" w-8 h-8 rounded-full">
            <img src={ayushProfile} alt="" />
          </div>
          <p className="text-f_text  text-sm">{username}</p>
          <div className=" cursor-pointer">
            <img src={profileMore} alt="" className="w-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
