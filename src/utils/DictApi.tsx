/* eslint-disable indent */
import React from "react";
import { useIsFetching, useQuery } from "@tanstack/react-query";
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
  // const isFetching = useIsFetching();

  if (wordQuery.isError) {
    throw new Error("Something went wrong...");
  }

  // if (search !== definition[0].word) {
  //   return null;
  // }

  const getWord = R.path([0, "word"]);
  const getPhonetics = R.path([0, "phonetic"]);
  const getMeanings = R.path([
    0,
    "meanings",
    0,
    "definitions",
    0,
    "definition",
  ]);

  const wordResult: string | unknown = getWord(definition);
  const phoneticResult: string | unknown = getPhonetics(definition);
  const meaningsResult: string | unknown = getMeanings(definition);

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
