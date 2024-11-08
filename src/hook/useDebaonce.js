/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";

const useDebaonce = (callback, delay) => {
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debounceCallback = (...args) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  };

  timeoutIdRef.current = setTimeout(() => {
    callback(...args);
  }, delay);

  return debounceCallback;
};

export default useDebaonce;
