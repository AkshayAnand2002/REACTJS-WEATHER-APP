import "./Weather.css";
import SearchBox from "../SearchBox/SearchBox";
import InfoBox from "../InfoBox/InfoBox";
import { useState } from "react";
export default function Weather() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "-------",
    feels_like: 0,
    humidity: 0,
    temperature: 0,
    temp_max: 0,
    temp_min: 0,
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="weather">
      <h1>Weather</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
