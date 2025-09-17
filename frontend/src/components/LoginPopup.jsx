import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin, setToken }) => { 
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Login") {
        const res = await fetch("http://localhost:3000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (result.success) {
          toast.success(result.message);
          localStorage.setItem("authToken", result.token);
          localStorage.setItem("isNewUser", "false");
          setToken(result.token); 
          setShowLogin(false);
        } else {
          toast.error(result.message);
        }
      } else {
        const res = await fetch("http://localhost:3000/api/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (result.success) {
    toast.success(result.message);
    localStorage.setItem("authToken", result.token); 
      localStorage.setItem("isNewUser", "true");   
    setToken(result.token);                          
    setShowLogin(false);
  } else {
    toast.error(result.message);
  }

      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 grid">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[min(90%,400px)] bg-white text-green-700 flex flex-col gap-6 p-6 rounded-lg text-sm animate-fadeIn"
      >
        {/* Title */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <button
            type="button"
            onClick={() => setShowLogin(false)}
            className="text-white bg-green-700 w-6 h-6 flex items-center justify-center rounded cursor-pointer"
          >
            ✕
          </button>
        </div>

       
        <div className="flex flex-col gap-5">
          {currState === "Sign Up" && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Your name"
              required
              className="outline-none border-2 border-green-700 p-2 rounded"
            />
          )}
          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your email"
            required
            className="outline-none border-2 border-green-700 p-2 rounded"
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            required
            className="outline-none border-2 border-green-700 p-2 rounded"
          />
        </div>

        <button className="p-2 rounded bg-green-700 text-white text-base cursor-pointer">
          {currState === "Login" ? "Login" : "Create Account"}
        </button>

        <div className="flex items-start gap-2 -mt-3 font-bold text-gray-700 text-xs">
          <input type="checkbox" required className="mt-1" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p className="text-gray-700 text-sm">
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="font-medium cursor-pointer underline text-green-700"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-gray-700 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="font-bold cursor-pointer underline text-green-700 hover:text-[#020c21]"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
