import React, { createContext, useContext, useMemo, useState } from "react";

export type DictContextType = {
  search: string;
  setSearch: (search: string) => void;
  theme: boolean;
  setTheme: (theme: boolean) => void;
  font: string;
  setFont: (font: string) => void;
};

const DictContext = createContext<DictContextType | undefined>(undefined);

export const DictProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState<string>("");
  const [theme, setTheme] = useState<boolean>(true);
  const [font, setFont] = useState<string>("SansSerif");

  const value = useMemo(
    () => ({
      search,
      setSearch,
      theme,
      setTheme,
      font,
      setFont,
    }),
    [search, setSearch, theme, setTheme, font, setFont],
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
