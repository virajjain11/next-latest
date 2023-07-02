"use client";

import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {};

  const handleChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen	justify-center bg-black ">
        <h1 className="text-lg">Login Page</h1>

        <label htmlFor="username"> Username</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={userDetails.username}
          className="text-blue-950 p-2 rounded"
          placeholder="User Name"
        />
        <label htmlFor="password"> Password</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={userDetails.password}
          className="text-blue-950 p-2 rounded"
          placeholder="password"
        />

        <button className="rounded-lg border-solid border border-white	my-3 p-2">
          Login
        </button>
        <p>
          Don't have a account? <Link href="/signup">Sign Up Now</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
