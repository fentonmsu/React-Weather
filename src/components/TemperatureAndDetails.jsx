import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails(props) {
  console.log(props)
  const {
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
    
  },
} = props
  return (
    <div>
      <div className="flex itmes-center justify-center py-6 text-xl text-cyan-300 shadow-md rounded">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3 shadow-md rounded">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20"></img>
        <p className="text-5xl">{`${temp.toFixed()}°`} </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            {" "}
          </div>
          <UilTemperature size={18} className="ar-1">
            Real Feel:
          </UilTemperature>
          <span className="font-medium ml-l">{`${feels_like.toFixed()}°`}</span>
          <div className="flex font-light text-sm items-center justify-center">
            {" "}
          </div>
          <UilTear size={18} className="ar-1">
            Humidity:
          </UilTear>
          <span className="font-medium ml-l">{`${humidity.toFixed()}%`}</span>
          <div className="flex font-light text-sm items-center justify-center">
            {" "}
          </div>
          <UilWind size={18} className="ar-1">
            Wind:
          </UilWind>
          <span className="font-medium ml-l">{`${speed.toFixed()} km/h`}</span>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-2 text-white text-sm py-2 shadow-md rounded">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <UilArrowUp />
        <p className="font-light">
          High: <span className="font-medium">{`${temp_max.toFixed()}°`} </span>
        </p>
        <UilArrowDown />
        <p className="font-light">
          Low: <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
