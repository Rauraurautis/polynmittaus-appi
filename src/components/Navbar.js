import React, { useRef } from 'react'
import logo from "./images/polylogo.png"
import { Link} from 'react-router-dom'

export default function Navbar({setInfocard}) {
    const navbar = useRef();

    const navAnim = () => {
        setInfocard("", "")
        navbar.current.style.animation = "rollDown 1s"
        setTimeout(() => {
            navbar.current.style.animation = "none"
        }, 1000)
    }
    return (

        <div className="upper-container" ref={navbar}>
            <div className="logo">

                <Link to="/"><img src={logo} alt={"logo"} /></Link>

            </div>
            <div className="nav-bar">
                <ul>
                    <Link to="/FAQ"><li onClick={() => navAnim()}>FAQ</li></Link>
                    <Link to="/statistics"><li onClick={() => navAnim()}>tilastot</li></Link>
                    <Link to="/contact"><li onClick={() => navAnim()}>ota yhteyttä</li></Link>
                </ul>
            </div>
        </div>
    )
}
