import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const {user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signUp(userData.email, userData.password, userData.firstName);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="w-full fixed px-5 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={handleChange}
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="First Name"
                autoComplete="first-name"
                name="firstName"
              />
              <input
                onChange={handleChange}
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="Last Name"
                autoComplete="last-name"
                name="lastName"
              />
              <input
                onChange={handleChange}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
                name="email"
              />
              <input
                onChange={handleChange}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                name="password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>
                <Link to="/login"> Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
