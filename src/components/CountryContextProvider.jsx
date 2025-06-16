import { useEffect, useReducer } from "react";
import { CountryContext } from "../store/CountryContext";

export default function CountryContextProvider({ children }) {
  const [state, dispatch] = useReducer(countriesReducer, {
    countries: [],
    loading: true,
    error: null,
    selectedRegion: null,
    search: null,
    selectedCountry: null,
  });

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("data/data.json");
        if (!response.ok) throw new Error("Error fetching the data");

        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    })();
  }, []);

  const ctxValue = {
    state,
    dispatch,
  };

  return <CountryContext value={ctxValue}>{children}</CountryContext>;
}

const countriesReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "FETCH_SUCCESS") {
    return { ...state, countries: payload, loading: false };
  }

  if (type === "FETCH_ERROR") {
    return { ...state, loading: false, error: payload };
  }

  if (type === "SELECT_REGION") {
    return { ...state, selectedRegion: payload };
  }

  if (type === "SEARCH") {
    return { ...state, search: payload === "" ? null : payload };
  }

  if (type === "SELECT_COUNTRY") {
    return { ...state, selectedCountry: payload };
  }

  return state;
};
