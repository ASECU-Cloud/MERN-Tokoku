import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/belanja";

const ItemsCard = () => {
  const products = useSelector((state) => state.belanja.data);
  const cart = useSelector((state) => state.belanja.cart);

  const dispatch = useDispatch();

  const template = products.map(({ id, type, name, price }) => {
    return (
      <div
        key={id}
        className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
      >
        <div className="relative">
          <img
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Colors"
          />
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-extrabold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {type}
          </p>
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          {name}
        </h1>
        <div className="my-4">
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p>{price}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart({ id, cart }))}
            className="mt-4 text-xl w-full text-white bg-green-400 hover:bg-green-600 py-2 rounded-xl shadow-lg"
          >
            Beli
          </button>
        </div>
      </div>
    );
  });

  return <div className="flex gap-4 flex-wrap justify-center">{template}</div>;
};

export default ItemsCard;
