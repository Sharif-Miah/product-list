const SortModal = ({ sortProducts }) => {
  // const { sortProducts, sortOrder, filteredProducts } =
  //   useContext(ProductContext);

  console.log(sortProducts);

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
          onClick={() => sortProducts("lowToHigh")}
        >
          Low to High
        </button>
        <button
          href=""
          className="w-full text-left cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
          onClick={() => sortProducts("highToLow")}
        >
          High to Low
        </button>
      </div>
    </div>
  );
};

export default SortModal;
