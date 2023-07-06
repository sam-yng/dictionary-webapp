import React from "react";
import logo from "../assets/images/logo.svg";
import themeIcoLight from "../assets/images/icon-moon.svg";
import classNames from "classnames";
import sliderLight from "../assets/images/slider-light.png";
import sliderDark from "../assets/images/slider-dark.png";
import { SearchBar } from "./SearchBar";
import { useDict } from "../utils/DictContext";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  const { search, setSearch, setTheme, theme } = useDict();

  return (
    <main>
      <nav
        className={classNames(
          "h-12",
          "flex",
          "flex-row",
          "justify-between",
          "items-center",
          "pt-10",
        )}
      >
        <Link to="/">
          <img className="h-8" src={logo} />
        </Link>
        <div
          className={classNames(
            "flex",
            "flex-row",
            "items-center",
            "space-x-6",
          )}
        >
          <button onClick={() => setTheme(!theme)}>
            <img className="h-8" src={theme ? sliderDark : sliderLight} />
          </button>
          <img className="h-6" src={themeIcoLight} />
        </div>
      </nav>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search for any word..."
        type="text"
        name="word"
      />
    </main>
  );
};
