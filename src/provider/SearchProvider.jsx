import { SearchContext } from "../context";
import useSearch from "../hook/useSearch";

const SearchProvider = ({ children }) => {
  const { setSearchTerm, filtered } = useSearch();

  return (
    <SearchContext.Provider value={{ setSearchTerm, filtered }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
