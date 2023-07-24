/* eslint-disable indent */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { NoResponse } from "../components/NoResponse";
import { mapQueryResponseToDictionaryDefinition } from "../utils/useWordQuery";

async function fetchDef(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  return await res.json();
}

export const DictionaryResult: React.FC = () => {
  const location = useLocation();
  const word = location.pathname.replace("/", "");

  const { data, fetchStatus, isLoading, isError } = useQuery(
    ["word", location],
    () => fetchDef(word),
    {
      enabled: !!word,
    },
  );
  const queryReturn = data;
  mapQueryResponseToDictionaryDefinition(queryReturn);

  if (queryReturn?.title) {
    return (
      <NoResponse
        title={queryReturn.title}
        message={queryReturn.message}
        resolution={queryReturn.resolution}
      />
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <main>
      {fetchStatus === "idle" && isLoading ? null : isLoading ? (
        <p>Loading Definition...</p>
      ) : (
        <main
          className={classNames(
            "flex",
            "flex-col",
            "my-auto",
            "h-[60%]",
            "mt-12",
          )}
        >
          {JSON.stringify(queryReturn)}
        </main>
      )}
    </main>
  );
};
