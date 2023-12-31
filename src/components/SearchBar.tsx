import classNames from "classnames";
import React, { useState } from "react";
import mag from "../assets/images/icon-search.svg";
import { useNavigate } from "react-router-dom";
import { useDictionarySearchResults } from "../utils/useDictionarySearchResults";

type SearchBarProps = {
  placeholder: string;
  type: string;
  name: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  type,
  name,
}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");
  const { dictionaryWord } = useDictionarySearchResults();

  const shouldShowWhoops = !input.length && !dictionaryWord;

  return (
    <>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "h-14",
          "items-center",
          "rounded-xl",
          "h-14",
          "px-4",
          "mt-10",
          "border",
          shouldShowWhoops && "border-red",
        )}
      >
        <input
          className={classNames(
            "w-full",
            "active:outline-none",
            "focus:outline-none",
            "font-bold",
          )}
          value={input}
          name={name}
          type={type}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
        />
        <button onClick={() => navigate(input)}>
          <img src={mag} />
        </button>
      </div>
      {shouldShowWhoops && (
        <p className={classNames("text-red")}>Whoops, can&apos;t be empty</p>
      )}
    </>
  );
};
