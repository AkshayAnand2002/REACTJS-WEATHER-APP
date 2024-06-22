/* eslint-disable react/prop-types */
import "./InfoBox.css";
export default function InfoBox({ info }) {
  return (
    <div className="infobox">
      <h1>{info.city}</h1>
      <p>feels_like:{info.feels_like}</p>
      <p>humidity:{info.humidity}</p>
      <p>temperature:{info.temperature}</p>
      <p>maximum temp:{info.temp_max}</p>
      <p>minimum temp:{info.temp_min}</p>
    </div>
  );
}
