import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import DropDownOptions from "../components/DropDownOptions";
import Card from "../components/Card";
import { CountryContext } from "../store/CountryContext";
import Loading from "../components/Loading";

function Home() {
  const { state } = useContext(CountryContext);
  const { countries, loading, error, selectedRegion, search } = state;

  // break accented letters into base charachters, then remove the diacritics
  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <main className="home-page px-4 py-6 md:px-10 md:py-12 lg:px-20">
        <div className="flex flex-col gap-y-10 mb-8 md:mb-12 md:flex-row md:gap-x-2 lg:justify-between">
          <SearchBar />
          <DropDownOptions />
        </div>
        <section className="flex flex-col gap-y-10 px-[39px] md:grid md:grid-cols-2 md:gap-[72px] lg:grid-cols-3 lg:px-0 ">
          {countries &&
            !selectedRegion &&
            !search &&
            countries.map((country, index) => {
              return <Card key={index} {...country} />;
            })}
          {selectedRegion &&
            !search &&
            countries
              .filter((country) => country.region === selectedRegion)
              .map((country, index) => <Card key={index} {...country} />)}
          {search &&
            !selectedRegion &&
            countries
              .filter((country) =>
                normalizeString(country.name).startsWith(search.toLowerCase())
              )
              .map((country, index) => <Card key={index} {...country} />)}
          {search &&
            selectedRegion &&
            countries
              .filter(
                (country) =>
                  normalizeString(country.name).startsWith(
                    search.toLowerCase()
                  ) && country.region === selectedRegion
              )
              .map((country, index) => <Card key={index} {...country} />)}
        </section>
      </main>
    </>
  );
}

export default Home;
