import { useEffect, useState } from "react";

const useLocalStore = (storeKey, defultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storeKey)) ?? defultValue
  );

  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(value));
  }, [value, storeKey]);

  return [value, setValue];
};

export default useLocalStore;
