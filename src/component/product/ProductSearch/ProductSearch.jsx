import { useContext, useState } from "react";
import { FavoritContext, ProductContext } from "../../../context";
import FilterModal from "../FilterProduct/FilterModal";
import FilterProduct from "../FilterProduct/FilterProduct";
import Search from "./Search";
import SortModal from "./SortProduct/SortModal";
import SortProduct from "./SortProduct/SortProduct";

const ProductSearch = ({ handleSearch }) => {
  const { favorits } = useContext(FavoritContext);

  const [opentModalSort, setOpenModalSort] = useState(false);
  const [opentModalFilter, setOpenModalFilter] = useState(false);

  const handleModalSort = () => {
    setOpenModalSort(!opentModalSort);
  };

  const handleModalFilter = () => {
    setOpenModalFilter(!opentModalFilter);
  };

  const { sortProducts, sortOrder, filteredProducts } =
    useContext(ProductContext);

  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="relative inline-block text-left">
            <SortProduct onModalSort={handleModalSort} />
            {opentModalSort && <SortModal sortProducts={sortProducts} />}
          </div>

          <FilterProduct onModalFilter={handleModalFilter} />
          {opentModalFilter && <FilterModal />}
        </div>

        <div className="flex gap-2 items-center">
          <Search handleSearch={handleSearch} />

          <div className="flow-root">
            <a href="#" className="group -m-2 flex items-center p-2">
              <svg
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {favorits.length}
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
