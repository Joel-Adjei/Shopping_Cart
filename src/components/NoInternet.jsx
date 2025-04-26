import React from 'react'
import { AiFillCloseCircle} from "react-icons/ai";
import { useWeather } from "../context/WeatherContext";

const NoInternet =()=>{
    const { connection , handleCloseErr} = useWeather()
    if(connection.display){
        return  null
    } else {
        return (
            <div className={`absolute top-0 size-full bg-grey flex justify-center items-center`}>
                <div className="size-[120] bg-white flex justify-center items-center relative">
                    <button onChange={handleCloseErr} className="absolute top-0 right-2"><AiFillCloseCircle size={30}/>
                    </button>
                    <p>{connection.message}</p>
                </div>
            </div>
        )
    }
}

export default NoInternet;