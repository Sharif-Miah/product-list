import { ProductContext } from "../context";
import { useProduct } from "../hook";

const ProductProvider = ({ children }) => {
  const {
    productData,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    sortProducts,
    sortOrder,
    filteredProducts,
  } = useProduct();

  return (
    <ProductContext.Provider
      value={{
        productData,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        sortProducts,
        sortOrder,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
