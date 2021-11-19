import React from 'react'
import helsinkilogo from "./images/helsinkilogo.png"
import katupolylogo from "./images/katupolylogo.png"


export default function Contact() {
    return (
        <div className="text-container">
            <span>
                Ota yhteyttä<br /><br />

                Kaupunkiympäristön toimiala<br /><br />

                Postiosoite: PL 58200, 00099 Helsingin kaupunki<br />
                Käyntiosoite: Työpajankatu 8<br />
                Vaihde: 09 310 2611 (arkisin 8–16)<br />
                kaupunkiymparisto@hel.fi<br /><br />

                Helsingin seudun ympäristöpalvelut HSY<br />
                Asiakaspalvelu<br />
                Palveluajat puhelimitse<br />
                ma, ke ja pe klo 8.30–15.30<br />
                ti klo 8.30–11.00<br />
                to klo 13.00–15.30<br />
                Vaihde arkisin klo 8.30–15.30<br /><br />

                Yhteystiedot<br />
                p. 09 1561 2110<br />
                Ilmalantori 1<br />
                00240 Helsinki<br />
            </span>
            <div className="img-container">
                <div id="helsinkilogo"><a href="https://www.facebook.com/HelsinkiKaupunkiymparisto/"><img
                    src={helsinkilogo} alt="helsinkilogo" /></a></div>
                <div id="katupolylogo"><a
                    href="https://niini.fi/wp-content/uploads/2021/04/HSY134_Apua_katupolyoireisiin_2021_suomi.pdf"><img
                        src={katupolylogo} alt="katupolylogo" /></a></div>
            </div>
        </div>

    )
}
