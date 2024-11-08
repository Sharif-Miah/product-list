/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useLocalStore = (storeKey, defultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storeKey)) ?? defultValue
  );

  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(value));
  }, [value, storeKey]);

  return [value, storeKey];
};

export default useLocalStore;
