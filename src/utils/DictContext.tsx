import React, { createContext, useContext, useMemo, useState } from "react";

export type DictContextType = {
  search: string;
  setSearch: (search: string) => void;
  theme: boolean;
  setTheme: (theme: boolean) => void;
  font: FontState;
  setFont: (font: FontState) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
};

export type FontState = "sansserif" | "serif" | "mono";

const DictContext = createContext<DictContextType | undefined>(undefined);

export const DictProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState<string>("");
  const [theme, setTheme] = useState<boolean>(true);
  const [font, setFont] = useState<FontState>("sansserif");
  const [valid, setValid] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      search,
      setSearch,
      theme,
      setTheme,
      font,
      setFont,
      valid,
      setValid,
    }),
    [search, setSearch, theme, setTheme, font, setFont, valid, setValid],
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
