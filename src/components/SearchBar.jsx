import React, { useContext, useMemo } from "react";
import { CountryContext } from "../store/CountryContext";
import debounce from "lodash.debounce";

function SearchBar() {
  const { dispatch } = useContext(CountryContext);

  const handleSearh = (value) => {
    dispatch({ type: "SEARCH", payload: value });
  };

  const debounceSearch = useMemo(() => debounce(handleSearh, 500), []);

  const handleChange = (e) => {
    debounceSearch(e.target.value);
  };

  return (
    <form
      role="search"
      className="flex items-center gap-x-6 px-8 h-12 md:h-14 shadow-[0_2px_9px_0_var(--color-black-5p)] rounded-[5px] md:grow lg:max-w-[480px] dark:bg-blue-900"
    >
      <img
        src="assets/search-icon.svg"
        alt="search icon"
        className="size-[15.56px] md:size-[17.5px] dark:filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(5989%)_hue-rotate(62deg)_brightness(125%)_contrast(94%)] "
      />
      <input
        type="search"
        name="query"
        placeholder="Search for a country..."
        onChange={handleChange}
        className="placeholder-grey-250 dark:text-white text-[0.75rem] font-normal leading-[135%] w-full md:text-[0.875rem] md:leading-[145%] outline-0 "
      />
    </form>
  );
}

export default SearchBar;
