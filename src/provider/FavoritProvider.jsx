/* eslint-disable react/prop-types */
import { FavoritContext } from "../context";
import { useLocalStore } from "../hook";

const FavoritProvider = ({ children }) => {
  const [favorits, setFavorits] = useLocalStore("cart", []);

  const addToCart = (product) => {
    setFavorits([...favorits, product]);
  };

  const removeFromCart = (id) => {
    const filterd = favorits.filter((item) => item.id !== id);
    setFavorits(filterd);
  };

  return (
    <FavoritContext.Provider value={{ favorits, addToCart, removeFromCart }}>
      {children}
    </FavoritContext.Provider>
  );
};

export default FavoritProvider;
