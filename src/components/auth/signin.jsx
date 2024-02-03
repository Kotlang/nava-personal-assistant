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
          console.log(data);
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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <p className="text-red-500 text-sm mb-4">{error}</p>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border p-2 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border p-2 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isSigningIn}
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Create an account
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
