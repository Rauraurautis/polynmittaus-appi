import React from 'react'
import statspic from "./images/tilastokuva.png"
import itlpic from "./images/ilmatieteenlaitos.png"

export default function Statistics() {
    return (
        <>
            <div className="tilasto-links">
                <div className="tilasto-links-header-ja-logo">
                    <span>Tilastot</span>
                    <img src={itlpic} alt="ilmatieteenlaitos" />
                </div>
                <a href="https://www.ilmatieteenlaitos.fi/ilmanlaadun-uusimmat-ylitykset" rel="noopener noreferrer">Raja- ja kynnysarvotasojen ylitykset kuluvana vuonna (koko Suomi)</a>
                <a href="https://www.ilmatieteenlaitos.fi/ilmansaasteet#tilasto" rel="noopener noreferrer">Ilmansaasteiden vuositilastot</a>
                <a href="https://www.ilmatieteenlaitos.fi/saadokset-ja-ohjeet#rajaarvot" rel="noopener noreferrer">Ilmanlaadun säädökset ja ohjeet</a>
                <a href="https://www.ilmatieteenlaitos.fi/ilmanlaatu"rel="noopener noreferrer">Lisätietoja ilmanlaadusta</a>
            </div >
        <div className="tilastokuva">
            <img src={statspic} alt="statistics" />
        </div>
        </>
    )
}
