import React from "react";
import ProfileHeader from "../ProfileHeader";
import SidePannel from "../SidePannel";
import ChatWindow from "../ChatWindow";
function Layout() {
    return (
        <>
            <div className="bg-m_black w-full h-screen overflow-hidden">
                <div className="flex">
                    <div className="w-[25%]">
                        <SidePannel />
                    </div>
                    <div className="w-[70%] relative  h-screen">
                        <ProfileHeader />
                        <ChatWindow />
                    </div>
                </div>
            </div>
            <script>hljs.highlightAll();</script>
        </>
    );
}

export default Layout;
