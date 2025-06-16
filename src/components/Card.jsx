import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountryContext } from "../store/CountryContext";

function Card({ name, flag, population, region, capital }) {
  const { state, dispatch } = useContext(CountryContext);
  const navigate = useNavigate();

  const handleGoToDetail = (countryName) => {
    const countryObj = state.countries.filter(
      (country) => country.name === countryName
    );

    console.log(countryObj);
    localStorage.setItem("country", JSON.stringify(countryObj[0]));
    dispatch({ type: "SELECT_COUNTRY", payload: countryObj });
    navigate("/detail");
  };

  return (
    <article
      role="link"
      tabIndex="0"
      onClick={() => handleGoToDetail(name)}
      className="px-6 py-12 bg-white dark:bg-blue-900 shadow-[0_0_7px_2px_var(--color-black-10p)] rounded-[5px] overflow-clip text-left cursor-pointer "
    >
      <div className="flex mt-[-48px] mr-[-24px] ml-[-24px] mb-[22px] ">
        <img src={flag} alt={` flag of ${name}`} />
      </div>

      <div className="dark:text-white">
        <h2 className="mb-4 dark:text-white">{name}</h2>

        <div className="flex flex-col gap-y-[8px] ">
          <p className="font-light">
            <strong className="font-semibold">Population:</strong>
            {` ${population.toLocaleString("en-US")}`}
          </p>
          <p className="font-light">
            <strong className="font-semibold">Region:</strong> {region}
          </p>
          <p className="font-light">
            <strong className="font-semibold">Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
