import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import RedButton from "../red-button";

export function FlightItem({ flightData, onSelect }) {
  const { departureFlight, returnFlight, setDepartureFlight, setReturnFlight } =
    useContext(AppContext);
  const originAirport = flightData["Origin"];
  const destinationAirport = flightData["Destination"];
  const price = flightData["Price ($)"];
  const duration = flightData["Travel Time"];
  const date = new Date(flightData["Departure datetime"]);
  const departureTimestamp = new Date(flightData["Departure datetime"]);
  const departureTime = departureTimestamp.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const arrivalTime = new Date(
    flightData["Arrival datetime"]
  ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  console.log("HELLOOOOOOOOOOOO");

  const handleSelect = () => {
    console.log();
    console.log("HANDLING SELECT");
    console.log(departureFlight);
    if (departureFlight === null) {
      setDepartureFlight(flightData);
      onSelect();
    }
    if (returnFlight === null) {
      setReturnFlight(flightData);
      console.log(returnFlight);
      onSelect();
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-9 border-b-2 border-[#D9D9D9] py-5 items-center">
      {/* Adjust the size and remove unnecessary classes */}
      <div className="flex pl-4 col-span-1">
        {/* Adjust the image class to fill the container */}
        <img
          src="/aa.png"
          alt="American Airlines"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="text-xl font-baloo text-black col-span-2">
        <div>
          {departureTime} - {arrivalTime}
        </div>
        <div className="text-[#868686]">{date.toLocaleDateString("en-US")}</div>
      </div>
      <div className="text-xl font-baloo text-black col-span-2">
        <h1>{duration}</h1>
      </div>
      <div className="text-xl font-baloo text-black col-span-2 ">
        <h1>
          {originAirport} - {destinationAirport}
        </h1>
      </div>
      <div className="text-xl font-bold font-baloo col-span-1 text-green-700">
        <h1>${price}</h1>
      </div>
      <div className="flex justify-center col-span-1">
        <RedButton className="py-px px-6" onClick={handleSelect}>
          Select
        </RedButton>
      </div>
    </div>
  );
}
