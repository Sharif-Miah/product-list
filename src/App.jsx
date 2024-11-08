import "./App.css";
import Page from "./page/Page";
import FavoritProvider from "./provider/FavoritProvider";
import ProductProvider from "./provider/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <FavoritProvider>
          <Page />
        </FavoritProvider>
      </ProductProvider>
    </>
  );
}

export default App;
