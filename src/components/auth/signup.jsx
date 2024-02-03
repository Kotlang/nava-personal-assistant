// SignUp.jsx
import React from "react";
import { useState } from "react";
import Verify from "./verify";
import axios from "axios";
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSignupSuccess, setSignupSuccess] = useState(false);
    const [error, setError] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault(e);
        await axios
            .post(
                process.env.REACT_APP_API_URL + "/v1/auth/signup",
                {
                    username: username,
                    password: password,
                    email: email,
                    phone: phoneNumber,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    setSignupSuccess(true);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setError("some error occured.");
                setEmail("");
                setPassword("");
                setUsername("");
                setPhoneNumber("");
            });
    };

    if (isSignupSuccess) {
        return <Verify phoneNumber={phoneNumber} />;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-black flex-col gap-4">
            <div className="bg-m_black px-12 py-10  rounded border-2 border-border_white w-[25%]">
                <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
                <p className="text-red-500 text-sm mb-4">{error}</p>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="border-2 border-border_white p-2 w-full rounded bg-m_black outline-none text-white"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="border-2 border-border_white p-2 w-full rounded bg-m_black outline-none text-white"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="border-2 border-border_white p-2 w-full rounded bg-m_black outline-none text-white"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            className="border-2 border-border_white p-2 w-full rounded bg-m_black outline-none text-white"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className=" bg-green-500 text-white p-2 rounded uppercase w-full text-sm tracking-widest"
                        onClick={onSubmit}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="bg-m_black rounded border-2 border-border_white w-[25%] text-center py-4">
                <p className="text-sm font-bold text-zinc-600 ">
                    Already have an account?{" "}
                    <a href="/signin" className="text-white pl-2">
                        Sign In
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignUp;
