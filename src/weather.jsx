import React from 'react'
import SearchBar from "./components/SearchBar";
import './weatherCSS.css'

import weatherImg from './wimg.png'
import OtherDetails from "./components/OtherDetails";
import {useWeather} from "./context/WeatherContext";
import Error from "./components/Error";
import NoInternet from "./components/NoInternet";

const Weather =()=>{
    const {weatherData, img} = useWeather()
    return(
        <section>
            <Error />
            <NoInternet />
            <div
                className="container"
                style={{}}
            >
                <SearchBar />

                <div className={"weather-info"}>
                    <img width={200} src={img} />
                    <h3>{weatherData.temp}°C</h3>
                    <h4>{weatherData.city}</h4>
                </div>

                <div className={"others"}>
                    <OtherDetails title={"Humidity"} value={ `${weatherData.humidity}%` } />
                    <OtherDetails title={"Wind Speed"} value={ `${weatherData.windSpeed}m/s` } />
                </div>
            </div>
        </section>
    )
}
export  default Weather;