/* eslint-disable indent */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import "../src/index.css";
import { Nav } from "./components/Nav";
import classNames from "classnames";
import { DictionaryResult } from "./pages/DictionaryResult";

export const App: React.FC = () => {
  return (
    <Router>
      <main>
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
