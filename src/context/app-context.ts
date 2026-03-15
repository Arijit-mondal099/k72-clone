import { useContext, createContext } from "react";

export interface IAppContext {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }

  return context;
};
