import React from "react";
import addChat from "../assets/addChat.png";
import ChatThambnail from "./ChatThambnail";
function ChatHistory() {
    return (
        <>
            <div className="border-2 rounded-md py-4 px-4  bg-m_black border-border_white h-[100%] flex flex-col gap-6 w-full">
                <div className=" flex items-center gap-4">
                    <div className=" cursor-pointer">
                        <img src={addChat} alt="" className="h-6" />
                    </div>
                    <p className="text-white text-sm">New Chat</p>
                </div>
                <div className="flex flex-col gap-10">
                    <ChatThambnail />
                    {/* <ChatThambnail  name={} detail={} timeStamp={}/> */}
                </div>
            </div>
        </>
    );
}

export default ChatHistory;
