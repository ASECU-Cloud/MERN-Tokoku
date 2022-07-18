import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.belanja.cart).map(
    ({ id, name, total, price }) => {
      console.log(id);
      return (
        <div
          key={id}
          className="flex flex-wrap text-xl font-bold divide-x-2 divide-green-400 text-center"
        >
          <div className="flex-grow basis-1/4">{name}</div>
          <div className="flex-grow basis-1/4">{price}</div>
          <div className="flex-grow basis-1/4">{total}</div>
          <div className="flex-grow basis-1/4">Rp. {price * total}</div>
        </div>
      );
    }
  );

  return (
    <div className="px-28 pt-12">
      <div className="bg-white px-16 pb-5 pt-5 rounded-3xl shadow-2xl">
        <div
          id="header"
          className="grid grid-cols-4 text-xl font-bold divide-x-2 divi divide-green-400 text-center pb-2"
        >
          <div>Barang</div>
          <div>Harga</div>
          <div>Total</div>
          <div>Total Harga</div>
        </div>
        {data}
      </div>
    </div>
  );
};

export default Cart;
