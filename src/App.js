import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div className="weather">
        <Input />
        <div className="weather_location">
          <h3>Weather in London</h3>
        </div>

        <div className="weather_degrees">12.84°C</div>
        <div className="weather_Description">
          <div className="weather_Description_head">
            <div>
              <span>☁</span>
              <h3>Partly Cloudy</h3>
            </div>
            <h3>Humidity: 82%</h3>
            <h3>Wind speed: 5.66 m/s</h3>
          </div>
          <h3>JP</h3>
          <h3>4/05/2022, 4:05:56PM</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
