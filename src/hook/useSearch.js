// /* eslint-disable react-hooks/exhaustive-deps */
// import { useContext, useEffect, useState } from "react";
// import { ProductContext } from "../context";

// const useSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const { productData } = useContext(ProductContext);

//   const filtered = productData.filter((item) => {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   useEffect(() => {
//     filtered();
//   }, []);

//   return { setSearchTerm };
// };

// export default useSearch;
