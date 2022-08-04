import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div className="weather">
        <Input />
        <div >
          <h3 className="weather_location">Weather in London</h3>
        </div>

        <div className="weather_degrees">12.84°C</div>
        <div className="weather_description">
          <div>
            <div className="weather_description_head">
              <span className="weather_icon">☁</span>
              <h3>Partly Cloudy</h3>
            </div>
            <h3>Humidity: 82%</h3>
            <h3>Wind speed: 5.66 m/s</h3>
          </div>
          <h3>JP</h3>
          <h3>4/05/2022, 4:05:56 PM</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
