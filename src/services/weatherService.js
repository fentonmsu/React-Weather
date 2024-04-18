import { DateTime } from "luxon";
const API_KEY = "e5bc49e2f2abf1c81ca74f8c61440c2e";
const BASE_URL = "https://api.openweathermap.org/data/";

// search params is an object and convert into a queryF
const getWeatherData = async (infoType, searchParams) => {
  let weatherUrl = BASE_URL;
  if (infoType === "onecall") {
    weatherUrl += "3.0";
  } else {
    weatherUrl += "2.5";
  }
  const url = new URL(weatherUrl + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  console.log(url.href);
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const formatCurrentWeather = (data) => {
  console.log(data);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { min: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};
const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  console.log(data);
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};
const getFormattedWeatherData = async (searchParams) => {
  try {
    // supposed to be await not working right
    const currentWeather = await getWeatherData(
      "weather",
      searchParams
    );
    const formattedCurrentWeather = formatCurrentWeather(currentWeather);
    console.log(formattedCurrentWeather)

    const { lat, lon } = formattedCurrentWeather;
    const forecast = await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    });
    const formattedForecast = await formatForecastWeather(forecast);

    return { ...formattedCurrentWeather, ...formattedForecast };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const formatToLocalTime = (
  sec,
  zone,
  format = "cccc, dd LLL yyyy;' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(sec).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
