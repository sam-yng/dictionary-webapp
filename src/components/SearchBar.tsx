import classNames from "classnames";
import React, { useEffect } from "react";
import mag from "../assets/images/icon-search.svg";
import { useDict } from "../utils/DictContext";
import { Link, useNavigate } from "react-router-dom";

type SearchBarProps = {
  placeholder: string;
  onChange?: (value: string) => void;
  type: string;
  name: string;
  value?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChange,
  type,
  name,
  value,
}) => {
  const { search } = useDict();
  const navigate = useNavigate();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  useEffect(() => {
    navigate("/");
  }, []);

  return (
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
        "bg-midopaque",
      )}
    >
      <input
        className={classNames(
          "w-full",
          "active:outline-none",
          "focus:outline-none",
          "bg-midopaque",
        )}
        value={value}
        name={name}
        type={type}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />

      <Link to={`/${search}`}>
        <img src={mag} />
      </Link>
    </div>
  );
};
