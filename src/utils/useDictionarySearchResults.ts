/* eslint-disable indent */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { APIQueryResponse } from "./useWordQuery";

async function fetchDef(wordQuery: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${wordQuery}`,
  );
  const response = await res.json();
  return response
}

export const useDictionarySearchResults = () => {
  const { wordQuery } = useParams<{ wordQuery: string }>();

  const { data, fetchStatus, isLoading, isError } = useQuery(
    ["word", location],
    () => wordQuery ? fetchDef(wordQuery) : "",
    { enabled: Boolean(wordQuery) },
  );

  return { dictionaryWord: <APIQueryResponse>data, fetchStatus, isLoading, isError }
};
