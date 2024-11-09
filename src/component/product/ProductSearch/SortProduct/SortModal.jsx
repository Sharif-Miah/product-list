import { useContext } from "react";
import { ProductContext } from "../../../../context";

const SortModal = () => {
  const { productData } = useContext(ProductContext);

  const handleLowToHigh = () => {
    productData.sort((a, b) => a.price - b.price);
  };
  const handleHighToLow = () => {
    productData.sort((a, b) => b.price - a.price);
  };

  return (
    <div
      className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        <button
          className="w-full text-left cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
          onClick={handleLowToHigh}
        >
          Low to High
        </button>
        <button
          href=""
          className="w-full text-left cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
          onClick={handleHighToLow}
        >
          High to Low
        </button>
      </div>
    </div>
  );
};

export default SortModal;
