import ProductHeading from "./ProductHeading/ProductHeading";
import ProductList from "./ProductList/ProductList";
import ProductSearch from "./ProductSearch/ProductSearch";

const Product = () => {
  return (
    <div>
      <ProductHeading />
      <ProductSearch />
      <ProductList />
    </div>
  );
};

export default Product;
