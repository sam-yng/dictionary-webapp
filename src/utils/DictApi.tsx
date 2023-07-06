/* eslint-disable indent */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDict } from "./DictContext";
import classNames from "classnames";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as R from "ramda";

async function fetchDef(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  // console.log("wtf");
  return await res.json();
}

export const DictionaryResult: React.FC = () => {
  const { search } = useDict();
  const wordQuery = useQuery(["word"], () => fetchDef(search), {
    staleTime: Infinity,
  });
  const definition = wordQuery.data;

  if (wordQuery.isError) {
    throw new Error("Something went wrong...");
  }

  const getData = (path: Array<string | number>): string | unknown => {
    const data = R.path(path);
    const result = data(definition);
    return result;
  };

  const wordResult = getData([0, "word"]);
  const phoneticResult = getData([0, "phonetic"]);
  const meaningsResult = getData([
    0,
    "meanings",
    0,
    "definitions",
    0,
    "definition",
  ]);

  return (
    <main className={classNames("mt-4", "mx-2")}>
      {wordQuery.fetchStatus === "idle" &&
      wordQuery.isLoading ? null : wordQuery.isLoading ? (
        <p>Loading Definition...</p>
      ) : (
        <main>
          {typeof wordResult === "string" ? <h1>{wordResult}</h1> : ""}
          {typeof phoneticResult === "string" ? <h1>{phoneticResult}</h1> : ""}
          {typeof meaningsResult === "string" ? <h1>{meaningsResult}</h1> : ""}
        </main>
      )}
      <ReactQueryDevtools />
    </main>
  );
};
