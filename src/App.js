import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {

  const [degrees, setDegrees] = useState(null)
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const API_KEY = "7dd052a7ba40dd6d44a1c1eda148339c";

  const fetchData = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${API_KEY}&units=metric`)
    const data = await res.data

    console.log(data)
  }
useEffect(() =>{
fetchData()
}, [])
  return (
    <div className="App">
      <div className="weather">
        <Input />
        <div className="weather_display">
          <h3 className="weather_location">Weather in Tokyo</h3>
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

          <div className="weather_country">
            <h3>JP</h3>
            <h3 className="weather_date">8/04/2022, 10:19:56 PM</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
