import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
import {Link} from "react-router-dom"
import Infocard from './Infocard'




const Map = ({setInfocard, infocard}) => {

   const dustMeters = [
       {location: "Keskusta", airQuality: 0.75, lat: 60.169857, lng: 24.938379 },
       {location: "Matinkylä", airQuality: 0.25, lat: 60.158458, lng: 24.743037 },
       {location: "Leppävaara", airQuality: 0.35, lat: 60.216858, lng: 24.811474 },
       {location: "Pasila", airQuality: 0.49, lat: 60.202009, lng: 24.930543 },
       {location: "Viikki", airQuality: 0.40, lat: 60.216484, lng: 24.960415 },
       {location: "Itäkeskus", airQuality: 0.35, lat: 60.208112, lng: 25.080908 },
       {location: "Herttoniemi", airQuality: 0.45, lat: 60.193571, lng: 25.036196 },
   ]

   const setCardInfo = (location = infocard.location, airQuality = infocard.airQuality, visible) => {
        setInfocard({location: location, airQuality: airQuality, visible: visible});
   }


    return (
        <div  className="map-container">
           
        <GoogleMap className="map" onClick={() => setCardInfo(undefined, undefined, false)}
            defaultZoom={12}
            defaultCenter={{ lat: 60.169857, lng: 24.938379 }}
           >
          {dustMeters.map(meter => {
              return <Marker onClick={() => setCardInfo(meter.location, meter.airQuality, true)} key={meter.lat + meter.lng} position={{lat: meter.lat, lng: meter.lng}}/>
          })}
        </GoogleMap>
        </div>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;