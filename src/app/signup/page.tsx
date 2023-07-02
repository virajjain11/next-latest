"use client";

import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const onSignUp = async () => {};

  //   const handleChange = ({ e, currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
  //     setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  //   };

  const handleChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen	justify-center bg-black ">
        <h1 className="text-lg">Sign up</h1>
        <label htmlFor="firstname"> First Name</label>
        <input
          id="firstname"
          type="text"
          onChange={handleChange}
          value={userDetails.firstname}
          className="text-blue-950 p-2 rounded"
          placeholder="First Name"
        />
        <label htmlFor="lastname"> Last Name</label>
        <input
          id="lastname"
          type="text"
          onChange={handleChange}
          value={userDetails.lastname}
          className="text-blue-950 p-2 rounded"
          placeholder="Last Name"
        />{" "}
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
        {/* padding: 8px;
    border: 2px solid red;
    margin: 10px 0;
    border-radius: 8px; */}
        <button className="rounded-lg border-solid border border-white	my-3 p-2">
          {" "}
          Sign Up now
        </button>
        <p>
          Already have a account? <Link href="/login">Login Now</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
