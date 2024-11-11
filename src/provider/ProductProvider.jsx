import { ProductContext } from "../context";
import { useProduct } from "../hook";

const ProductProvider = ({ children }) => {
  const { productData, loading, error, searchTerm, setSearchTerm } =
    useProduct();

  return (
    <ProductContext.Provider
      value={{ productData, loading, error, searchTerm, setSearchTerm }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
