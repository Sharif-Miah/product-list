/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FavoritContext } from "../../../context";

const SingleProduct = ({ product }) => {
  const { title, description, image, price, category } = product;

  const shortDes = description.slice(0, 90);

  const [isFavorit, toggleFavorit] = useState(false);
  const { favorits, addToCart, removeFromCart } = useContext(FavoritContext);

  // const { productData } = useContext(ProductContext);

  useEffect(() => {
    const found = favorits.find((fav) => fav.id === product.id);
    toggleFavorit(found);
  }, []);

  const handleClick = () => {
    const found = favorits.find((fav) => fav.id === product.id);

    if (!found) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
    toggleFavorit(!isFavorit);
  };

  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={image}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-xl font-bold  text-gray-700">
            {title.slice(0, 16)}
          </h3>
          <h3 className="text-md font-semibold text-gray-700 my-2">
            {category}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{shortDes}...</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>

      <button
        onClick={handleClick}
        className={`cursor-pointer w-full rounded-md ${
          isFavorit ? `bg-slate-700 text-white` : `bg-white text-slate-700`
        }  text-[0.8125rem] font-medium leading-5  ring-1   hover:ring-1 ring-slate-700/10   items-center text-center mb-3 mx-3 flex-1`}
      >
        <div className="flex px-3 py-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {isFavorit ? "Delete To Cart" : "Add To Cart"}
        </div>
      </button>
    </div>
  );
};

export default SingleProduct;
