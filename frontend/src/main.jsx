import React, { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary"; // Adjusted path

// Create Context
export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: {},
  setUser: () => {},
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Context.Provider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
