import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import "../src/index.css";
import { Nav } from "./components/Nav";
import classNames from "classnames";
import { DictionaryResult } from "./utils/DictApi";
import { useDict } from "./utils/DictContext";

export const App: React.FC = () => {
  const { theme } = useDict();

  return (
    <Router>
      <main className={theme ? "light" : "dark"}>
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
