import React, { createContext, useContext, useMemo, useState } from "react";

export type DictContextType = {
  search: string;
  setSearch: (search: string) => void;
};

const DictContext = createContext<DictContextType | undefined>(undefined);

export const DictProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState<string>("");

  const value = useMemo(
    () => ({
      search,
      setSearch,
    }),
    [search, setSearch],
  );

  return <DictContext.Provider value={value}>{children}</DictContext.Provider>;
};

export const useDict = (): DictContextType => {
  const value = useContext(DictContext);
  if (!value) {
    throw new Error("useDict can only be called from within a DictProvider");
  }
  return value;
};
