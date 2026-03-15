import { useState, type ReactNode } from "react";
import { AppContext } from "./app-context";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <AppContext.Provider value={{ isNavbarOpen, toggleNavbar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
