import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
const Verify = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSignInSuccess, setSignInSuccess] = useState(false);
  const navigate = useNavigate();
  const handleVerify = async () => {
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/v1/auth/verify",
        {
          phone: phoneNumber,
          otp: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const jwtToken = response.data.jwt_token;
          if (jwtToken) {
            Cookies.set("jwtToken", jwtToken);
          }
          setSignInSuccess(true);
        } else {
          setError("Invalid OTP. Please retry.");
          setOtp("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Invalid OTP. Please retry.");
        setOtp("");
      });
  };

  if (isSignInSuccess) {
    return navigate("/");
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Verification</h2>
        <form>
          <p className="text-red-300 text-sm mb-4">{error}</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otp"
            >
              Enter OTP:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the 6-digit OTP"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleVerify}
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
