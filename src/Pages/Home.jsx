import React from "react";
import UserContextProvider from "../context/UserContextProvider";
import Login from "../components/Login";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <UserContextProvider>
      <div className="w-full h-screen bg-lime-300 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl">React context Api</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default Home;
