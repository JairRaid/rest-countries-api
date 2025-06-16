import React, { useContext, useEffect, useRef, useState } from "react";
import { CountryContext } from "../store/CountryContext";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

function DropDownOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(CountryContext);
  const { selectedRegion } = state;
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative w-full max-w-[200px] text-[0.75rem] leading-[135%] md:text-[0.875rem] md:leading-[145%] "
      ref={dropdownRef}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        className="text w-full flex justify-between items-center px-[24.5px] md:px-6 h-12 md:h-14 text-grey-950 dark:text-white dark:bg-blue-900 rounded-[5px] shadow-[0_2px_9px_0_var(--color-black-5p)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedRegion || "Filter by Region"}
        <svg
          className="size-4 text-grey-950 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul
          className="absolute z-10 mt-2 py-3 w-full bg-white dark:bg-blue-900 rounded-[5px] shadow-[0_2px_9px_0_var(--color-black-5p)]"
          role="listbox"
        >
          {regions.map((region) => (
            <li
              key={region}
              className="px-6 py-1 text-grey-950 dark:text-white hover:bg-gray-100 dark:hover:bg-blue-950 cursor-pointer"
              role="option"
              aria-selected={selectedRegion === region}
              onClick={() => {
                dispatch({ type: "SELECT_REGION", payload: region });
                setIsOpen(false);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDownOptions;
