import { useContext } from "react";
import { ProductContext } from "../../../context";
import SingleProduct from "./SingleProduct";

const ProductList = () => {
  const { productData, searchTerm } = useContext(ProductContext);

  const filtered = productData.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filtered.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
