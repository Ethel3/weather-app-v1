import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import moment from "moment";
function App() {

  const [degrees, setDegrees] = useState(null)
  const [location, setLocation] = useState("")
  const [userlocation, setuserLocation] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [humidity, setHumidity] = useState(null)
  const [wind, setWind] = useState(null)
  const [country, setCountry] = useState("")
  const [zone, setZone] = useState("")
  const [dataFetched, setDataFetched] = useState(false)

  

  const date = moment().format("dddd, MMMM Do YYYY, h:mm a")

  const fetchData = async (e) => {
    e.preventDefault()
    try{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userlocation}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    const data = await res.data
    
    setDegrees (data.main.temp)
    setLocation(data.name)
    setDescription(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setCountry(data.sys.country)
    setDataFetched(true)
  }catch(err){
  console.log(err)
  alert("Please enter valid location")
  }

  }
  
  const defaultDataFetched = async () =>{
    if(!dataFetched){
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=accra&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    const data = await res.data
    
    setDegrees (data.main.temp)
    setLocation(data.name)
    setDescription(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setCountry(data.sys.country)
    }
    
  }
useEffect(() =>{
defaultDataFetched()
}, [])
  return (
    <div className="App">
      <div className="weather">
        <Input
        text= {(e) => setuserLocation(e.target.value)} 
        submit = {fetchData}
        func = {fetchData}
        />
        <div className="weather_display">
          <h3 className="weather_location">Weather in {location}</h3>
        </div>

        <div className="weather_degrees">{degrees} °C</div>
        <div className="weather_description">
          <div>
            <div className="weather_description_head">
              <span className="weather_icon">
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
              </span>
              <h3>{description} </h3>
            </div>
            <h3>Humidity:{humidity}%</h3>
            <h3>Wind speed: {wind} m/s</h3>
          </div>
          

          <div className="weather_country">
            <h3>{country}</h3>
            <h3 className="weather_date">{date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
