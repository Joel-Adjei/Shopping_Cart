import React from 'react'
import {useWeather} from "../context/WeatherContext";

const Error =()=>{
    const { errMessage } = useWeather()
    if(!errMessage){
        return null
    } else {
        return (
            <div style={{position: "absolute"}}>
                <h1>{errMessage}</h1>
            </div>
        )
    }
}

export default Error