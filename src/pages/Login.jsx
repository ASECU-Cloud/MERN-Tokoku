import { useState } from "react";

const Login = () => {
  const [log, setLog] = useState(true);

  return (
    <div className="flex  items-center text-center flex-col p-5">
      <div className="bg-white rounded-lg p-3  shadow-xl w-[50%]">
        <div className="text-lg font-bold p-2">
          <div className="flex justify-evenly shadow-lg pb-2 mb-2 rounded-lg">
            <span
              className="w-full"
              onClick={() => {
                setLog(true);
              }}
            >
              Login
            </span>
            <span className="font-bold text-green-400">|</span>
            <span
              className="w-full"
              onClick={() => {
                setLog(false);
              }}
            >
              Register
            </span>
          </div>
          {/* Login */}
          {log && (
            <div className="text-base font-normal grid grid-flow-row gap-2">
              <input
                className="bg-slate-200 rounded-lg p-2 mt-4"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                className="bg-slate-200 rounded-lg p-2"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button className="bg-green-400 rounded-lg p-2 font-extrabold text-white">
                Login
              </button>
            </div>
          )}
          {/* Register */}
          {!log && (
            <div className="text-base font-normal grid grid-flow-row gap-1">
              <label htmlFor="name">Name : </label>
              <input
                id="name"
                className="bg-slate-200 rounded-lg p-2"
                type="text"
                name="Name"
              />
              <label htmlFor="phone">Phone Number : </label>
              <input
                id="phone"
                className="bg-slate-200 rounded-lg p-2"
                type="tel"
                name="phone"
              />
              <label htmlFor="user">Username : </label>
              <input
                id="user"
                className="bg-slate-200 rounded-lg p-2"
                type="text"
                name="username"
              />
              <label htmlFor="pass">Password : </label>
              <input
                id="pass"
                className="bg-slate-200 rounded-lg p-2"
                type="password"
                name="password"
              />
              <button className="bg-green-400 rounded-lg p-2 font-extrabold text-white">
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
