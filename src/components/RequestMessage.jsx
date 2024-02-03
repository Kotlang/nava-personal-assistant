import React from "react";

function RequestMessage({message}) {
    return (
        <>
            <div className="my-2 py-2 px-3 bg-border_white rounded-lg w-fit max-w-[70%] self-end">
                <p className=" text-white pr-5 text-[15px]">
                    {message}
                </p>
            </div>
        </>
    );
}

export default RequestMessage;
