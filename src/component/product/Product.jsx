import { useContext } from "react";
import { ProductContext } from "../../context";
import useDebaonce from "../../hook/useDebaonce";
import Loading from "../Loading/Loading";
import ProductHeading from "./ProductHeading/ProductHeading";
import ProductList from "./ProductList/ProductList";
import ProductSearch from "./ProductSearch/ProductSearch";

const Product = () => {
  const { loading, productData, setSearchTerm } = useContext(ProductContext);

  // const filtered = productData.filter((item) => {
  //   return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // console.log(filtered);

  const doSearch = useDebaonce((term) => {
    // const fetchSearch = filtered(term);
    setSearchTerm(term);
    // console.log(term);
  }, 1500);

  const handleSearch = (e) => {
    const value = e.target.value;
    // filtered(value);
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
          <ProductList productData={productData} />
        </>
      )}
    </div>
  );
};

export default Product;
