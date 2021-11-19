import React from 'react'

import Dustmeter from "./images/dustmeter.png"
import Viisari from "./images/dustmeterviisari.png"

export default function Airqualitymeter({ airQuality }) {

  
    const airQualityMessage = () => {
        if (airQuality < 0.3) return "Ilmanlaatu on hyvä";
        if (airQuality < 0.6) return "Ilmanlaatu on tyydyttävä";
        if (airQuality < 1) return "Ilmanlaatu on huono, maskin käyttö suositeltavaa";

          
    }
    
    const viisariPosition = (airQuality * 100) + 62;
    
    return (
        <div>
            <div className="dustmeter-image">
                <img src={Dustmeter} alt="dustmeter" />
                <div className="viisari">
                    <img style={{ marginLeft: viisariPosition }} src={Viisari} alt="viisari" />
                </div>
            </div>
            <h3>{airQualityMessage()}</h3>
        </div>
    )
}
