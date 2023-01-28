import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  const info = async () => {
    const data = doc(db, "users", `${user?.uid}`);
    const docData = await getDoc(data);
    setUserInfo(docData.data());
  };

  useEffect(() => {
    info();
  });

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-2xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex flex-row items-center gap-5 ">
          <Link to="/account">
            <button className="text-white pr-4 flex flex-row gap-3 items-center text-2xl bg-black/60 px-3 py-2 rounded-full hover:scale-105 shadow-xl">
              <FaUserCircle />
              <span className="text-base">
                {userInfo?.displayName || "Account"}
              </span>
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white rounded cursor-pointer txt-4xl px-3 py-1 hover:scale-105 shadow-xl"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 text-white rounded cursor-pointer txt-4xl px-3 py-1">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
