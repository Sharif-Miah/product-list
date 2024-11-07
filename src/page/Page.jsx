import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import Product from "../component/product/Product";

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Hero />
          <Product />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
