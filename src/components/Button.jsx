import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  return (
    <button
      role="link"
      aria-label="Go to homepage"
      onClick={() => navigate("/")}
      className="flex center-both gap-x-2 text-grey-950 dark:text-white text-[0.875rem] dark:bg-blue-900 md:text-base font-light leading-[225%] md:leading-[200%] bg-white w-[104px] h-8 rounded-[2px] mb-16 md:mb-[56px] lg:mb-20 shadow-[0_0_7px_0_#0000001A] "
    >
      <img
        src="assets/arrow-left.svg"
        alt="back icon"
        className="w-[16.97px] md:w-[22.19px] dark:filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(5989%)_hue-rotate(62deg)_brightness(125%)_contrast(94%)] "
      />
      Back
    </button>
  );
}

export default Button;
