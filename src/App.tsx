import React from "react";
import Landing from "./pages/Landing";
import { AppContextProvider } from "./context/AppContext";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
};

export default App;
