import React from "react";

function ChatThambnail({ name, detail, timeStamp }) {
    return (
        <>
            <div className="flex flex-col w-full">
                <p className="text-lg font-semibold text-f_text">{name}</p>
                <div className="flex flex-row justify-between w-full items-baseline">
                    <p className=" text-[12px] text-f_text">{detail}</p>
                    <p className="text-sm  text-white">{timeStamp}</p>
                </div>
                <div className="w-full h-[1px] bg-f_text mt-1"></div>
            </div>
        </>
    );
}

export default ChatThambnail;

{
    /* <div className="flex flex-col w-full">
                <p className="text-lg font-semibold text-f_text">Chat Name</p>
                <div className="flex flex-row justify-between w-full items-baseline">
                    <p className=" text-[12px] text-f_text">
                        Challenges in designing IoT ......
                    </p>
                    <p className="text-sm  text-white">Yesterday</p>
                </div>
                <div className="w-full h-[1px] bg-f_text mt-1"></div>
            </div> */
}
