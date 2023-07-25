/* eslint-disable indent */
import React from "react";
import logo from "../assets/images/logo.svg";
import themeIcoLight from "../assets/images/icon-moon.svg";
import themeIcoDark from "../assets/images/icon-moon-dark.png";
import classNames from "classnames";
import sliderLight from "../assets/images/slider-light.png";
import sliderDark from "../assets/images/slider-dark.png";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";

export const Nav: React.FC = () => {
  return (
    <>
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
            defaultValue={"sansserif"}
            className={classNames("h-10", "overflow-hidden", "text-purple")}
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
          <button>
            <img className="h-8" src={sliderDark} />
          </button>
          <img className="h-6" src={themeIcoLight} />
        </div>
      </nav>
      <SearchBar placeholder="Search for any word..." type="text" name="word" />
    </>
  );
};
