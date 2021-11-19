import React from 'react'
import Airqualitymeter from "./Airqualitymeter"

export default function Infocard({ location, airQuality, cursorCoords, visible }) {
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
            <Airqualitymeter airQuality={airQuality} />
        </div>
    )
}
