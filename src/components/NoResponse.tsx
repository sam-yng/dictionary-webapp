import React from "react";
import classNames from "classnames";

type NoResponseProps = {
  title: string;
  message: string;
  resolution: string;
};

export const NoResponse: React.FC<NoResponseProps> = ({
  title,
  message,
  resolution,
}: NoResponseProps) => {
  return (
    <main
      className={classNames(
        "flex",
        "flex-col",
        "justify-center",
        "text-center",
        "space-y-6",
        "mt-36",
      )}
    >
      <h1 className="text-6xl">😐</h1>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-lg text-lightgray">
        {message} {resolution}
      </p>
    </main>
  );
};
