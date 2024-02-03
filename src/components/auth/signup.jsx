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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border p-2 w-full"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/signin" className="text-green-500">
            Sign In
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
