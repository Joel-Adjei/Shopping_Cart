import React, {createContext, useContext, useEffect, useState} from "react";
import {cloudy, heavyRain, sun} from "../assets/constant";

const WeatherContext = createContext();

const apiKey = "29adf92449bf1424faa950f129ddfbf8"

export const WeatherContextProvider =({children})=>{
    const [inputValue , setInputValue] = useState("")
    const [weatherData, setWeatherData] = useState({})
    // const [city , setCty] = useState("")
    // const [humidity , setHumidity] = useState("")
    // const [windSpeed , setWindSpeed] = useState("")
    // const [temperature , setTemperature] = useState("")
    const [img , setImg] = useState(null)
    const [errMessage , setErrMessage] = useState("")
    const [connection, setConnection] = useState({ message: "", display: false})

    const url =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${  inputValue === "" ? "London" : inputValue}&appid=${apiKey}`

    useEffect(()=>{
        fetchWeather()
    },[])


    const handleSearch=()=>{
        fetchWeather()
        setInputValue("")
    }

    async function fetchWeather(){
        try{
            const response = await fetch(url)
            const data = await response.json()

            console.log(data)
             if(data.cod !== 200){
                 setErrMessage(data.message)
                 setConnection({message: "Check internet Connection", display: true});
             }
             setWeatherData({
                 city: data.name,
                 temp: Math.round(data.main.temp),
                 humidity: data.main.humidity,
                 windSpeed: data.wind.speed,
             })
            // setCty(data.name)
            // setTemperature(Math.round(data.main.temp))
            // setHumidity(data.main.humidity)
            // setWindSpeed(data.wind.speed)
            if(data.weather[0].main === "Clouds"){
                setImg(cloudy)
            }else if(data.weather[0].main === "Clear"){
                setImg(sun);
            }else{
                setImg(heavyRain);
            }


        }catch (e) {
            // if(e === "Failed to fetch") {
            //
            // }
            console.log( "An Error ", e)
        }
    }

    function handleCloseErr() {
        setConnection({...connection, display: false})
    }

    return(
        <WeatherContext.Provider value={{
            inputValue,
            setInputValue,
            handleSearch,
            // humidity,
            // windSpeed,
            // temperature,
            // city,
            weatherData,
            img,
            errMessage,
            connection,
            handleCloseErr,
        }}>
            {  children }
        </WeatherContext.Provider>
    )
}

export const useWeather =()=> useContext(WeatherContext)