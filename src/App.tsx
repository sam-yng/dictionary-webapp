/* eslint-disable indent */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import "../src/index.css";
import { Nav } from "./components/Nav";
import classNames from "classnames";
import { DictionaryResult } from "./utils/DictionaryResult";
import { useDict } from "./utils/DictContext";

export const App: React.FC = () => {
  const { theme, font } = useDict();

  return (
    <Router>
      <main
        className={classNames(
          `${theme ? "light" : "dark"}`,
          `${
            font === "sansserif"
              ? "font-sansserif"
              : font === "mono"
              ? "font-mono"
              : font === "serif"
              ? "font-serif"
              : ""
          }`,
        )}
      >
        <div
          className={classNames(
            `w-7/12`,
            `mx-auto`,
            "h-screen",
            "overflow-y-scroll",
          )}
        >
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:search" element={<DictionaryResult />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};
