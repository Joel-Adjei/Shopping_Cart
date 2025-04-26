import React from 'react'
import { BiSearch} from "react-icons/bi";
import {useWeather} from "../context/WeatherContext";

const SearchBar =()=>{
    const { inputValue, setInputValue, handleSearch } = useWeather()
    return(
        <div className={"input-container"} >
            <input
                placeholder={"Search City"}
                type={"text"}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className={`cursor-pointer`}
            >
                <BiSearch size={30} color={"#15015a"} />
            </button>
        </div>
    )
}
export  default SearchBar;