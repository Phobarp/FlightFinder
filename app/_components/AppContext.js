"use client";
import { createContext } from "react";
import React from "react";

const AppContext = createContext({
  departureFlight: null,
  returnFlight: null,
  hotel: null,
  setDepartureFlight: () => {}, // Add setter functions in the context default value
  setReturnFlight: () => {},
  setHotel: () => {},
});

const AppProvider = ({ children }) => {
  const [departureFlight, setDepartureFlight] = React.useState(null);
  const [returnFlight, setReturnFlight] = React.useState(null);
  const [hotel, setHotel] = React.useState(null);

  console.log("AppProvider", departureFlight, returnFlight, hotel);

  return (
    <AppContext.Provider
      value={{
        departureFlight,
        setDepartureFlight,
        returnFlight,
        setReturnFlight,
        hotel,
        setHotel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
