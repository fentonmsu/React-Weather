import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
  hoverVariants,
} from "./js/framer-motion";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // need used states
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
      setLoading(true);
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);

      // gives me a problem with the await
      const data = await getFormattedWeatherData({ ...query, units });
      toast.success(
        `Successfully fetched weather for ${data.name} ${data.country}.`
      );
      
      setWeather(data);
      setLoading(false);
      } catch (err) {
        console.log(err)
        toast.error("Something went wrong, please try again!")
    }
    };

    fetchWeather();
  }, [query, units]);
  const setLoadedUnits = (units) => {
    // if we don't have the weather set null the temperature will be compared to the previous weather temperature
    setWeather(null)
    setLoading(false);
    setUnits(units);
  }

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700"; 
    const threshold = units === "metric" ? 20 : 68;
    console.log(units);
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };

  return (
    <>
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          className="search"
        >
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setLoadedUnits} />
        </motion.div>
        {loading ? (
          <div>Loading... </div>
        ) : (
          <>
            {weather && (
              <div>
                <TimeAndLocation weather={weather} />
                <TemperatureAndDetails weather={weather} />
                <Forecast title="hourly forecast" items={weather.hourly} />
                <Forecast title="daily forecast" items={weather.daily} />
              </div>
            )}
          </>
        )}
        <ToastContainer
          autoClose={3000}
          theme="colored"
          newestOnTop={true}
        ></ToastContainer>
      </div>
    </>
  );
}

export default App;
