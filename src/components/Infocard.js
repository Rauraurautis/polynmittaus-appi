import React, {useState, useEffect} from 'react'
import Airqualitymeter from "./Airqualitymeter"
import axios from 'axios'

export default function Infocard({ location, airQuality, cursorCoords, visible, position }) {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=60.169857&lon=24.938379&appid=cece91304810be2d1b9a12f7d3dc794f&units=metric`)
    .then(response => {
        setWeatherData(response.data)
    }).catch(error => {
        console.error(error);
        setWeatherData({weather: [{description: "Unable to get weather"}]})
    })
    }, [])
    


    let positionStyle = {
        left: cursorCoords.x + "px",
        top: cursorCoords.y + "px"
    }
    if (location === undefined) return ""
    if (!visible) {
        positionStyle = {...positionStyle, animation: "fadeOut 1s", animationFillMode: "forwards"}
    }

    

    return (
        <div className="infocard-container" style={positionStyle}>
            <h2>{location}</h2>
            <h3>{weatherData.weather[0].description}</h3>
            <div className="weather-image"><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt=" "/></div>
            <h3 id="temperature">{weatherData.main.temp}°C</h3>
            <Airqualitymeter airQuality={airQuality} />
        </div>
    )
}
