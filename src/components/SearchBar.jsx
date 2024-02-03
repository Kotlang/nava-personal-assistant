import React from "react";
import search from "../assets/search.png";
function Serachbar() {
    return (
        <>
            <div className="relative border-2 rounded-md py-1 px-4  bg-m_black border-border_white flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    name=""
                    id=""
                    className="text-f_text  text-sm p-1 pr-5 bg-m_black w-full outline-none"
                />
                <div className="cursor-pointer  absolute right-4 pl-2">
                    <img src={search} alt="" className="w-5" />
                </div>
            </div>
        </>
    );
}

export default Serachbar;
