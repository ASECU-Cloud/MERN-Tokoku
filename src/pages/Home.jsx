import ItemsCard from "../components/ItemsCard";
import { useDispatch, useSelector } from "react-redux";
import { alterKategori } from "../features/belanja";
import { useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.belanja.data);
  const [sel, setSel] = useState(false);

  const Btnkategori = (e) => {
    if (sel) {
      setSel(true);
      e.target.classList.toggle("bg-green-600");
      e.target.classList.toggle("bg-green-400");
    } else {
      setSel(false);
      e.target.classList.toggle("bg-green-600");
      e.target.classList.toggle("bg-green-400");
    }
    dispatch(alterKategori({ type: e.target.name, data: products }));
  };

  return (
    <div className="px-20 mt-6">
      <div>
        <div className="font-extrabold text-xl my-3">Kategori</div>
        <div className="flex justify-around">
          <button
            onClick={Btnkategori}
            className="bg-green-400 text-white font-bold rounded-lg px-2 hover:bg-green-600"
            name="Snack"
          >
            Snack
          </button>
          <button
            onClick={Btnkategori}
            className="bg-green-400 text-white font-bold rounded-lg px-2 hover:bg-green-600"
            name="Beverage"
          >
            Beverage
          </button>
          <button
            onClick={Btnkategori}
            className="bg-green-400 text-white font-bold rounded-lg px-2 hover:bg-green-600"
            name="Bumbu"
          >
            Bumbu Dapur
          </button>
          <button
            onClick={Btnkategori}
            className="bg-green-400 text-white font-bold rounded-lg px-2 hover:bg-green-600"
            name="Tools"
          >
            Tools
          </button>
          <button
            onClick={Btnkategori}
            className="bg-green-400 text-white font-bold rounded-lg px-2 hover:bg-green-600"
            name="Toys"
          >
            Toys
          </button>
        </div>
      </div>
      <div id="items">
        <div className="font-extrabold text-xl my-3">Products</div>
        <ItemsCard />
      </div>
    </div>
  );
}

export default Home;
