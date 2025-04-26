
import React from "react";
import {WeatherContextProvider} from "./context/WeatherContext";
import Weather from "./weather";

const App = () => {
    return (
        <WeatherContextProvider>
            <Weather />
        </WeatherContextProvider>
    )
}

export default App