import "./App.css";
import Page from "./page/Page";
import ProductProvider from "./provider/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <Page />
      </ProductProvider>
    </>
  );
}

export default App;
