import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1 className="text-2xl font-semibold">Not Logged In</h1>;
  return <div className="text-2xl font-semibold">Profile:{user.username}</div>;
};

export default Profile;
