import React from "react";
import logo from "../assets/images/logo.svg";
import themeIcoLight from "../assets/images/icon-moon.svg";
import themeIcoDark from "../assets/images/icon-moon-dark.png";
import classNames from "classnames";
import sliderLight from "../assets/images/slider-light.png";
import sliderDark from "../assets/images/slider-dark.png";
import { SearchBar } from "./SearchBar";
import { useDict } from "../utils/DictContext";
import { Link } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";

export const Nav: React.FC = () => {
  const { search, setSearch, setTheme, theme, font, setFont } = useDict();

  const handleChange = (event: { target: { value: string } }) => {
    setFont(event.target.value);
  };

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
          <div id="select">
            <Select
              className={classNames("h-10")}
              onChange={handleChange}
              value={font}
            >
              <MenuItem value={"SansSerif"}>Sans Serif</MenuItem>
              <MenuItem value={"Serif"}>Serif</MenuItem>
              <MenuItem value={"Mono"}>Mono</MenuItem>
            </Select>
          </div>
          <button onClick={() => setTheme(!theme)}>
            <img className="h-8" src={theme ? sliderDark : sliderLight} />
          </button>
          <img className="h-6" src={theme ? themeIcoLight : themeIcoDark} />
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
