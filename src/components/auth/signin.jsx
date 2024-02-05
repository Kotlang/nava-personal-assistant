import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { json, useNavigate } from "react-router-dom";
function SignInPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignInSuccess, setSignInSuccess] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);

        try {
            await axios
                .post(
                    process.env.REACT_APP_API_URL + "/v1/auth/login",
                    {
                        email: email,
                        password: password,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    const data = response.data;
                    const jwtToken = data.token;
                    // console.log(data);
                    if (jwtToken) {
                        Cookies.set("jwtToken", jwtToken);
                    }
                    Cookies.set("userdata", JSON.stringify(data));
                    setSignInSuccess(true);
                    setError("");
                })
                .catch((error) => {
                    console.log(error);
                    setEmail("");
                    setPassword("");
                    setError("Invalid credentials. Please retry.");
                    console.log("Invalid credentials");
                });
        } finally {
            setIsSigningIn(false);
        }
    };

    useEffect(() => {
        if (isSignInSuccess) {
            navigate("/");
        }
    }, [isSignInSuccess, navigate]);

    return (
        <div className="flex items-center justify-center h-screen bg-black flex-col gap-4">
            <div className="bg-m_black px-10 py-12  rounded border-2 border-border_white min-w-[25%]">
                <h2 className="text-2xl font-bold mb-4 text-white">Sign In</h2>
                <p className="text-red-300 text-sm mb-4">{error}</p>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="border-2 border-border_white p-2 w-full rounded bg-m_black outline-none text-white"
                            placeholder="Username"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="border-2 border-border_white p-2 w-full rounded bg-m_black outline-none  text-white"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSigningIn}
                        className=" bg-green-500 text-white p-2 rounded uppercase w-full text-sm tracking-widest"
                        onClick={handleSignIn}
                    >
                        {isSigningIn ? "Just a Moment" : "Login"}
                    </button>
                </form>
            </div>
            <div className="bg-m_black rounded border-2 border-border_white min-w-[25%] text-center py-4">
                <p className="text-sm font-bold text-zinc-600 ">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-white pl-2">
                        Sign Up
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default SignInPage;
