import * as React from "react"
import Navbar from "../components/navbar"
import icons from "../components/constantes/icons"
import "../styles/index.css"
import bg from "../images/bg.png"

const Test = () => {
    const overallStyle = {
        margin:0,
        backgroundImage: `url(${bg})`,
        backgroundPosition: "90% 20%",
        height:"65vh"

    }

    return(
        <div style={overallStyle}>
            <Navbar logo={icons.logo}/>
        </div>
    )
}

export default Test