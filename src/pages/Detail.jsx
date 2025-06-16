import React, { useContext } from "react";
import Button from "../components/Button";
import { CountryContext } from "../store/CountryContext";
import { useNavigate } from "react-router-dom";

function Detail() {
  const { state, dispatch } = useContext(CountryContext);
  const { selectedCountry } = state;

  const navigate = useNavigate();

  const country = !selectedCountry
    ? JSON.parse(localStorage.getItem("country"))
    : selectedCountry[0];
  const borderCountries =
    country.borders !== undefined
      ? state.countries.filter((c) => country.borders.includes(c.alpha3Code))
      : null;

  const handleGoToDetail = (countryName) => {
    const countryObj = state.countries.filter(
      (country) => country.name === countryName
    );
    dispatch({ type: "SELECT_COUNTRY", payload: countryObj });
    navigate("/detail");
  };
  return (
    <>
      <main className="detail-page px-[27.5px] pt-10 lg:pt-20 pb-[55px] md:px-[99px] lg:px-[81px] ">
        <Button />
        <article className="bg-white dark:bg-transparent rounded-[5px] md:rounded-[10px] overflow-clip text-left lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-6 ">
          <div className="rounded-[5px] md:rounded-[10px] overflow-clip mb-12 md:mb-[56px] lg:mb-0 ">
            <img src={country.flag} alt={`flag of ${country.name}`} />
          </div>

          <div className="lg:max-w-[598px] lg:justify-self-end">
            <h2 className="text-2xl md:text-[2rem] mb-4 md:mb-6 dark:text-white ">
              {country.name}
            </h2>

            <div className="md:flex md:justify-between md:mb-6">
              <div className="flex flex-col leading-[32px] mb-[32px] md:mb-0 text-[0.875rem] md:text-base text-grey-950 dark:text-white">
                <p className="font-light">
                  <strong className="font-semibold">Native Name:</strong>
                  {` ${country.nativeName}`}
                </p>
                <p className="font-light">
                  <strong className="font-semibold">Population:</strong>
                  {` ${country.population.toLocaleString("en-US")}`}
                </p>
                <p className="font-light">
                  <strong className="font-semibold">Region:</strong>{" "}
                  {country.region}
                </p>
                <p className="font-light">
                  <strong className="font-semibold">Sub Region: </strong>
                  {country.subregion}
                </p>
                <p className="font-light">
                  <strong className="font-semibold">Capital:</strong>{" "}
                  {country.capital}
                </p>
              </div>
              <div className="flex flex-col leading-[32px] mb-[32px] md:mb-0 text-[0.875rem] md:text-base text-grey-950 dark:text-white ">
                <p className="font-light">
                  <strong className="font-semibold">Top Level Domain: </strong>
                  {country.topLevelDomain}
                </p>
                <p className="font-light">
                  <strong className="font-semibold">Currencies:</strong>
                  {` ${country.currencies[0].name}`}
                </p>
                <p className="font-light">
                  <strong className="font-semibold">Languages: </strong>
                  {country.languages.map((language, index) => {
                    if (index !== country.languages.length - 1)
                      return <span key={index}>{`${language.name}, `}</span>;
                    return <span key={index}>{`${language.name}`}</span>;
                  })}
                </p>
              </div>
            </div>

            <div className=" text-grey-950 dark:text-white">
              <div className="font-light ">
                <strong className="font-semibold block text-base mb-[16px] ">
                  Border Countries:
                </strong>
                <p className="flex flex-wrap gap-[16px] ">
                  {borderCountries !== null ? (
                    borderCountries.map((bCountry, index) => (
                      <button
                        key={index}
                        role="link"
                        tabIndex="0"
                        onClick={() => handleGoToDetail(bCountry.name)}
                        className="flex center-both px-[30px] h-[28px] text-[0.875rem] shadow-[0_0_4px_1px_#0000001A] dark:bg-blue-900 "
                      >
                        {bCountry.name}
                      </button>
                    ))
                  ) : (
                    <span>No border countries</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Detail;
