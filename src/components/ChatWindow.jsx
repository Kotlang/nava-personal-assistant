import React, { useEffect, useState } from "react";
import ResponseMessage from "./ResponseMessage";
import RequestMessage from "./RequestMessage";
import send from "../assets/send.png";
import imageUplaod from "../assets/imageUpload.png";
import mic from "../assets/mic.png";
import sendRequest from "../clients/chat";
import * as marked from "marked";

function ChatWindow() {
    const [searchInput, setSearchInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [chatSessionId, setChatSessionId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMessage = { text: searchInput, sender: "user" };
        setMessages([...messages, newMessage]);
        setSearchInput("");
        const queryRequest = {
            query: searchInput,
        };
        const response = await sendRequest(chatSessionId, queryRequest);
        console.log(response);
        if (response) {
            const htmlResponse = marked.parse(response.response);
            setChatSessionId(response.chat_session_id);
            receiveMessageFromAI(htmlResponse);
        }
    };

    const receiveMessageFromAI = (responseText) => {
        const aiMessage = { text: responseText, sender: "ai" };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
    };

    return (
        <>
            <div className=" py-4 px-8 w-full flex flex-col max-h-[75%] overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-black scrollbar-w-1 scrollbar-thumb-rounded-full ">
                {messages.map((message, index) =>
                    message.sender === "user" ? (
                        <RequestMessage key={index} message={message.text} />
                    ) : (
                        <ResponseMessage key={index} message={message.text} />
                    )
                )}
            </div>
            <div className="w-full absolute bottom-0 right-0 px-6 my-5 flex flex-row justify-between items-center ">
                <div className="w-8 cursor-pointer">
                    <img src={imageUplaod} alt="" />
                </div>
                <div className="relative border-2 rounded-md py-2 px-4  bg-m_black border-border_white flex items-center w-[90%]">
                    <input
                        type="text"
                        placeholder="What do you want to know ......"
                        name=""
                        id=""
                        className="text-f_text pr-5 bg-m_black w-full outline-none "
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                    />
                    <div className="cursor-pointer  absolute right-4 pl-2">
                        <button
                            onClick={handleSubmit}
                            onKeyDown={(e) =>
                                e.key === "Enter" ? handleSubmit : ""
                            }
                            type="submit"
                        >
                            <img src={send} alt="" className="w-5" />
                        </button>
                    </div>
                </div>
                <div className="w-5 cursor-pointer">
                    <img src={mic} alt="" />
                </div>
            </div>
        </>
    );
}

export default ChatWindow;
