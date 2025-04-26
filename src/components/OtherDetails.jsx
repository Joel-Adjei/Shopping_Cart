import React from 'react'
import {WiHumidity} from "react-icons/wi";
import { LiaWindowMinimizeSolid} from "react-icons/lia";

const icon = {
    size: 30,
    color: "white"
}
const OtherDetails =({src , title ,  value})=>{
    return(
        <div className={"other-details"}>
            { title === "Humidity" ? <WiHumidity color={icon.color} size={icon.size} />
            : <LiaWindowMinimizeSolid color={icon.color} size={icon.size} />}
            <p>{value}</p>
            <p>{title}</p>
        </div>
    )
}
export  default OtherDetails;