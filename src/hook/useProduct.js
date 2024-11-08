/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState([
    {
      id: "",
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    },
  ]);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Product data fetching...",
      });

      const response = await fetch(
        `https://fakestoreapi.com/products?limit=12`
      );

      if (!response.ok) {
        const errorMessage = `This is a error massage ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setProductData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "product data finding...",
    });

    fetchProductData();
  }, []);

  return {
    productData,
    loading,
    error,
  };
};

export default useProduct;
