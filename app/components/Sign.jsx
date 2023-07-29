'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import the correct module for the router

const Sign = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const router = useRouter();

  // Replace "admin" with the actual username and password you want to check
  const admin = {
    username: "admin",
    password: "admin",
  };

  const handleLogin = () => {
    if (Username === admin.username && Password === admin.password) {
      router.push("/Map");
    } else {
      setErrorMessage("Invalid credentials. Please try again."); // Set the error message for invalid login
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0 bg-no-repeat bg-cover">
        <Image src='./assets/Login/PLAINBG.png' alt="bg" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <Image src='./assets/Login/signin.gif' alt="bg" width={500} height={400} />
        <h1 className="text-2xl mb-4 font-badoni">THE AGA KHAN UNIVERSITY</h1>
        <div className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Email or Username"
            value={Username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="border rounded-lg px-4 mr-28 py-3 bg-transparent mb-4 text-left placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={Password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="border rounded-lg px-4 py-3 pl-5 bg-transparent mb-1 text-left placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 w-full pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {/* Add your icon here */}
              <Image
                src='./assets/Login/Lockicon.png'
                alt="Lock Icon"
                className="text-gray-400"
                height={25}
                width={25}
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}

        {/* Login Button */}
        <button
          className="bg-[#258D95] hover:bg-[#166065] hover:scale-110 text-white font-bold py-3 px-8 rounded transition ease-in-out duration-100"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Sign;
