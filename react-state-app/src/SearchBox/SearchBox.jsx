import "./SearchBox.css";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "714adc18a7298f3b76f4657eb36bc0da";
  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
      city: city,
      feels_like: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      temperature: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
    };
    console.log(result);
    return result;
  };
  let handleChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
  };
  return (
    <form className="searchbox" onSubmit={handleSubmit}>
      <label htmlFor="city">Please Enter A Location:-</label>
      <br></br>
      <input
        placeholder="City "
        id="city"
        value={city}
        onChange={handleChange}
      />
      <br></br>
      <button>Search</button>
    </form>
  );
}
