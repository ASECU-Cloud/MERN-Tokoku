import { useState } from "react";
import { useDispatch } from "react-redux";
import { procAuth } from "../features/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // select type
  const [log, setLog] = useState(true);
  // register state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password || !phone || !address || !name) {
      return;
    }

    try {
      const call = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, name, phone, address }),
      }).then((e) => e.json());
      console.log(call);
      if (!call.error) {
        dispatch(
          procAuth({
            data: {
              name: call.name,
              username: call.username,
              phone: call.phone,
              address: call.address,
              token: call.token,
            },
            type: "login",
          })
        );
      }
    } catch (error) {
      console.warn(error);
    }

    // navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      return;
    }
    try {
      const result = await fetch(" http://localhost:4000/user/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((data) => data.json());
      if (result.hasOwnProperty("error")) {
        throw Error(result.error);
      }

      dispatch(
        procAuth({
          data: {
            name: result.user.name,
            username: result.user.username,
            phone: result.user.phone,
            address: result.user.address,
            _id: result.user._id,
            token: result.token,
          },
          type: "login",
        })
      );
    } catch (error) {
      return alert(error);
    }

    navigate("/");
  };

  return (
    <div className="flex  items-center text-center flex-col p-5">
      <div className="bg-white rounded-lg p-3  shadow-xl w-[50%]">
        <div className="text-lg font-bold p-2">
          <div className="flex justify-evenly shadow-lg pb-2 mb-2 rounded-lg">
            <span
              className="w-full cursor-pointer hover:bg-slate-100 hover:rounded-xl"
              onClick={() => {
                setLog(true);
              }}
            >
              Login
            </span>
            <span className="font-bold text-green-400">|</span>
            <span
              className="w-full cursor-pointer hover:bg-slate-100 hover:rounded-xl"
              onClick={() => {
                setLog(false);
              }}
            >
              Register
            </span>
          </div>
          {/* Login */}
          {log && (
            <form
              onSubmit={handleLogin}
              className="text-base font-normal grid grid-flow-row gap-2"
            >
              <input
                className="bg-slate-200 rounded-lg p-2 mt-4"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                className="bg-slate-200 rounded-lg p-2"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="bg-green-400 rounded-lg p-2 font-extrabold text-white">
                Login
              </button>
            </form>
          )}
          {/* Register */}
          {!log && (
            <form
              onSubmit={handleRegister}
              className="text-base font-normal grid grid-flow-row gap-1"
            >
              <label className="text-left" htmlFor="name">
                Name :{" "}
              </label>
              <input
                id="name"
                className="bg-slate-200 rounded-lg p-2"
                type="text"
                name="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label className="text-left" htmlFor="phone">
                Phone Number :{" "}
              </label>
              <input
                id="phone"
                className="bg-slate-200 rounded-lg p-2"
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <label className="text-left" htmlFor="alamat">
                Alamat :{" "}
              </label>
              <textarea
                id="alamat"
                className="bg-slate-200 rounded-lg p-2"
                rows={2}
                type="text"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <label className="text-left" htmlFor="user">
                Username :{" "}
              </label>
              <input
                id="user"
                className="bg-slate-200 rounded-lg p-2"
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label className="text-left" htmlFor="pass">
                Password :{" "}
              </label>
              <input
                id="pass"
                className="bg-slate-200 rounded-lg p-2"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="bg-green-400 rounded-lg p-2 font-extrabold text-white">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
