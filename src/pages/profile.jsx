// import { useState } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { procAuth } from "../features/user";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [riwayat, setRiwayat] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    setData(
      riwayat.map(({ _id, items, createdAt }) => {
        let date = new Date(createdAt).toDateString();
        let time = new Date(createdAt).toTimeString();
        return (
          <div key={_id} className="bg-slate-200 mt-px">
            <p>{date}</p>
            {items.map(({ id, name, price, total }) => {
              return (
                <div key={id}>
                  <p>
                    {name}
                    {price}
                    {total}
                    {price * total}
                  </p>
                </div>
              );
            })}
            <p>{time}</p>
          </div>
        );
      })
    );
  }, [riwayat]);

  useEffect(() => {
    async function fetchRiwayat() {
      try {
        const res = await fetch(
          "https://backend-tokoku.herokuapp.com/api/toko/" + user._id,
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((e) => e.json());

        return setRiwayat(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRiwayat();
  }, [user._id]);

  const handleLogout = () => {
    dispatch(procAuth({ type: "logout" }));
    navigate("/");
  };
  return (
    <div>
      {user.token && (
        <div className="m-20">
          <div className="bg-white rounded-2xl p-8 ">
            <h1>Hello. {user.username}</h1>
            <pre>
              <p>
                Nama{"     "}:{user.name}
              </p>
              <p>
                Telepon{"  "}:{user.phone}
              </p>
              <p>
                Alamat{"   "}:{user.address}
              </p>
            </pre>
            <p>Riwayat belanja</p>
            {data}
          </div>
          <div>
            <button
              className="bg-green-400 px-4 py-1 text-white font-bold mt-4 rounded-lg  hover:bg-green-600"
              onClick={handleLogout}
            >
              {" "}
              Log Out{" "}
            </button>
          </div>
        </div>
      )}
      {!user.token && (
        <div className="text-center py-72 h-screen ">
          <h1 className="text-2xl font-bold">You need to login first!</h1>
          <p>
            <Link to={"/login"} className="underline">
              Press to login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
