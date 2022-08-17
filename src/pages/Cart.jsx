import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modMin, modSum, stateInit } from "../features/belanja";

const Cart = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  let summa = 0;
  const carts = useSelector((state) => state.belanja.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const plus = (e) => {
    dispatch(modSum({ carts, id: e.target.id }));
  };
  const min = (e) => {
    dispatch(modMin({ carts, id: e.target.id }));
  };
  const reInit = () => {
    dispatch(stateInit());
  };

  carts.forEach((e) => {
    summa += e.total * e.price;
  });

  useEffect(() => {
    if (summa === 0) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [summa]);

  const handleCheckout = async () => {
    if (user.token === null) {
      alert("You need to login/register first!");
      navigate("/login");
      return;
    }
    const token = "Bearer " + user.token;
    try {
      const result = await fetch(
        "https://backend-tokoku.herokuapp.com/api/toko/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({ _id: user._id, items: carts }),
        }
      ).then((e) => e.json());
      alert("Pembelian diproses !!!!");
      if (result.hasOwnProperty("error")) {
        throw Error(result.error);
      }
      reInit();
      navigate("/");
    } catch (error) {
      console.warn(error);
      navigate("/login");
    }
  };

  const data = carts.map(({ id, name, total, price }) => {
    return (
      <div
        key={id}
        className="flex flex-wrap text-xl font-bold divide-x-2 divide-green-400 text-center"
      >
        <div className="flex-grow basis-1/4">{name}</div>
        <div className="flex-grow basis-1/4">{price}</div>
        <div className="flex-grow basis-1/4">
          <button
            id={id}
            className="mr-3 p-1 bg-green-400 text-white rounded-full"
            onClick={plus}
          >
            +
          </button>
          {total}
          <button
            id={id}
            className="ml-3 p-1 bg-green-400 text-white rounded-full"
            onClick={min}
          >
            -
          </button>
        </div>
        <div className="flex-grow basis-1/4">Rp. {price * total}</div>
      </div>
    );
  });

  return (
    <div className="px-28 pt-12">
      <div className="bg-white px-16 pb-5 pt-5 rounded-3xl shadow-2xl">
        <div
          id="header"
          className="grid grid-cols-4 text-xl font-bold divide-x-2 divide-green-400 text-center pb-2"
        >
          <div>Barang</div>
          <div>Harga</div>
          <div>Total</div>
          <div>Total Harga</div>
        </div>
        {data}

        {check && (
          <div className="grid grid-cols-4 text-xl font-bold  text-center py-3">
            <button
              className="bg-green-400 col-start-3 text-white font-medium rounded-lg  hover:bg-green-600"
              onClick={handleCheckout}
            >
              Check Out
            </button>
            <p>Rp. {summa}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
