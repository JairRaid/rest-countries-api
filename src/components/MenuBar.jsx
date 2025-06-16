import { useTheme } from "../store/ThemeContext";

function MenuBar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="flex items-center px-[16px] py-[30px] bg-white dark:bg-blue-900 shadow-[0_2px_4px_0_var(--color-black-5p)] md:px-[41px] lg:px-[80.5px] ">
      <h1 className="mr-auto dark:text-white">Where in the world?</h1>
      <button
        type="button"
        aria-label={darkMode ? "switch to light mode" : "switch to dark mode"}
        onClick={toggleDarkMode}
        className="flex items-center gap-2"
      >
        <img
          src={
            !darkMode
              ? "assets/dark-mode-icon.png"
              : "assets/light-mode-icon.png"
          }
          alt={darkMode ? "dark mode icon" : "light mode icon"}
          className={`${
            darkMode ? "size-[12px] lg:size-[15px]" : "lg:size-5"
          } size-4`}
        />
        <span className="block text-grey-950 dark:text-white text-[0.75rem] font-semibold leading-[135%] lg:text-base lg:leading-[200%] ">
          Dark Mode
        </span>
      </button>
    </header>
  );
}

export default MenuBar;
