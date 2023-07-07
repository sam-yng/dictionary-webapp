/* eslint-disable indent */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDict } from "./DictContext";
import classNames from "classnames";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as R from "ramda";
import { useLocation } from "react-router-dom";

async function fetchDef(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  return await res.json();
}

export const DictionaryResult: React.FC = () => {
  const { search } = useDict();
  const location = useLocation();

  const wordQuery = useQuery(["word", location], () => fetchDef(search));
  const definition = wordQuery.data;

  if (definition?.title) {
    return (
      <main
        className={classNames(
          "flex",
          "flex-col",
          "justify-center",
          "text-center",
          "space-y-6",
        )}
      >
        <h1 className="text-6xl">😐</h1>
        <h1 className="text-xl">{definition.title}</h1>
        <p className="text-lg">
          {definition.message} {definition.resolution}
        </p>
      </main>
    );
  }

  if (wordQuery.isError) {
    return <p>Something went wrong</p>;
  }

  const getData = (path: Array<string | number>): string | unknown => {
    const data = R.path(path);
    const result = data(definition);
    return result;
  };

  const wordResult = getData([0, "word"]);
  const phoneticResult = getData([0, "phonetic"]);
  const partOfSpeech = getData([0, "meanings", 0, "partOfSpeech"]);

  function getLength(): number {
    return definition
      ? (getData([0, "meanings", 0, "definitions"]) as string[]).length
      : 0;
  }

  const defLength = getLength();

  function getMeanings() {
    const meaningsArr: string[] = [];
    for (let i = 0; i < defLength; i++) {
      meaningsArr.push(
        getData([0, "meanings", 0, "definitions", i, "definition"]) as string,
      );
    }
    return meaningsArr;
  }

  const meaningsResult = getMeanings();

  return (
    <main className={classNames("mt-10")}>
      {wordQuery.fetchStatus === "idle" &&
      wordQuery.isLoading ? null : wordQuery.isLoading ? (
        <p>Loading Definition...</p>
      ) : (
        <main className={classNames("flex", "flex-col", "my-auto", "h-[60%]")}>
          {typeof wordResult === "string" ? (
            <h1 className={classNames("text-6xl", "font-bold")}>
              {wordResult}
            </h1>
          ) : (
            ""
          )}
          {typeof phoneticResult === "string" ? (
            <h1 className={classNames("text-purple", "mt-4", "text-lg")}>
              {phoneticResult}
            </h1>
          ) : (
            ""
          )}
          {typeof partOfSpeech === "string" ? (
            <article className={classNames("mt-8")}>
              <h1 className={classNames("text-xl", "font-bold")}>
                {partOfSpeech}
              </h1>
              <h1 className={classNames("text-md", "mt-4")}>Meaning</h1>
            </article>
          ) : (
            ""
          )}
          {typeof meaningsResult === "object" ? (
            <ul
              className={classNames("list-disc", "ml-10", "mt-4", "space-y-4")}
            >
              {meaningsResult.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </main>
      )}
      <ReactQueryDevtools />
    </main>
  );
};
