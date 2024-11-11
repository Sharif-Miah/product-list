import { useContext } from "react";
import { ProductContext } from "../../context";
import useDebaonce from "../../hook/useDebaonce";
import Loading from "../Loading/Loading";
import ProductHeading from "./ProductHeading/ProductHeading";
import ProductList from "./ProductList/ProductList";
import ProductSearch from "./ProductSearch/ProductSearch";

const Product = () => {
  const { loading, setSearchTerm } = useContext(ProductContext);

  const doSearch = useDebaonce((term) => {
    setSearchTerm(term);
  }, 1500);

  const handleSearch = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <div>
      <ProductHeading />
      <ProductSearch handleSearch={handleSearch} />
      {loading.state ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <ProductList />
        </>
      )}
    </div>
  );
};

export default Product;
