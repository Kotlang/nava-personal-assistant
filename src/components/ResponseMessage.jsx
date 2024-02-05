import React from "react";

export default function ResponseMessage({ message }) {
    return (
        <>
            <div className="my-2 py-2 px-3 border-2 border-[#828282] rounded-lg w-fit max-w-[70%] ">
                <p
                    className=" text-white pr-5 text-[15px]"
                    dangerouslySetInnerHTML={{ __html: message }}
                ></p>
            </div>
        </>
    );
}
