import React from "react";
import { NoResponse } from "./NoResponse";
import { useDictionarySearchResults } from "../utils/useDictionarySearchResults";
import classNames from "classnames";

export const DictionaryResult: React.FC = () => {
  const { dictionaryWord, isError, isLoading, fetchStatus } =
    useDictionarySearchResults();

  const shouldShowLoadingState = fetchStatus !== "idle" && isLoading;

  if (dictionaryWord?.title) {
    return (
      <NoResponse
        title={dictionaryWord.title}
        message={dictionaryWord.message ?? ""}
        resolution={dictionaryWord.resolution ?? ""}
      />
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      {shouldShowLoadingState && <p>Loading Definition...</p>}
      {dictionaryWord && (
        <div
          className={classNames(
            "flex",
            "flex-col",
            "my-auto",
            "h-[60%]",
            "mt-12",
          )}
        >
          {JSON.stringify(dictionaryWord)}
        </div>
      )}
    </div>
  );
};
