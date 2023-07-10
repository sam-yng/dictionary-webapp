/* eslint-disable indent */
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
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
          <Select
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              color: `${theme ? "black" : "white"}`,
              "& .MuiSvgIcon-root": {
                color: `${theme ? "black" : "white"}`,
              },
              fontFamily: `${font}`,
            }}
            className={classNames("h-10", "overflow-hidden", "text-purple")}
            onChange={handleChange}
            value={font}
          >
            <MenuItem sx={{ fontFamily: "sansserif" }} value={"sansserif"}>
              Sans Serif
            </MenuItem>
            <MenuItem sx={{ fontFamily: "serif" }} value={"serif"}>
              Serif
            </MenuItem>
            <MenuItem sx={{ fontFamily: "mono" }} value={"mono"}>
              Mono
            </MenuItem>
          </Select>
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
