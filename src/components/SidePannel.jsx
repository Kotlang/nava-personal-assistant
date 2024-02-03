import React from "react";
import SearchBar from "./SearchBar";
import ChatHistory from "./ChatHistory";

function SidePannel() {
    return (
        <div className="w-full flex flex-col pt-4 px-8 bg-[#171717] h-lvh gap-5 overflow-hidden">
            <SearchBar />
            <ChatHistory />
        </div>
    );
}

export default SidePannel;
