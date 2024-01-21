import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className=" flex flex-col gap-4 w-1/4 shadow-sm bg-slate-100/50 p-5 rounded-md">
      <h2 className="text-xl">Login</h2>
      <input
        className="px-4 py-3 rounded-lg"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="px-4 py-3 rounded-lg"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        onClick={handleSubmit}
        className="bg-yellow-400 py-2 rounded-lg outline-yellow-200/10"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
