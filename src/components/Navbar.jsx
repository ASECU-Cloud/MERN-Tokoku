import { Link } from "react-router-dom";

function Navbar({ children, search }) {
  const buttn = () => {
    if (search) {
      alert("yatta");
    } else {
      alert("not yatta");
    }
  };

  const searchkeyword = (e) => {
    console.log(e.target.value);
  };

  return (
    <main>
      <div className="bg-lime-600 flex justify-between items-center px-14 py-8 font-bold text-white rounded-b-3xl">
        <Link to={"/"}>
          <p className="font-extrabold text-2xl underline">TokoKu</p>
        </Link>
        {search === true && (
          <div className="text-gray-800 flex">
            <input
              onChange={searchkeyword}
              className="p-2 rounded-l-lg border  focus:outline-green-400 w-64"
              type="text"
              placeholder="Masukan nama barang"
            />
            <div className="bg-green-300 rounded-r-lg self-stretch">
              <button onClick={buttn} className="m-1" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 m-2 text-slate-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {!search && <div className="text-3xl mr-28  ">Cart</div>}
        {search === "login" && (
          <div className="text-3xl mr-28  ">Login Page</div>
        )}
        {search === true && (
          <div className="flex gap-20 items-center justify-between">
            <div>
              <Link to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </Link>
            </div>
            <Link to={"/login"}>
              <div className="text-2xl">Login</div>
            </Link>
          </div>
        )}
      </div>
      {children}
    </main>
  );
}

export default Navbar;
