import * as React from "react"
import Navbar from "../components/Navbar"
import "../styles/index.css"
import bg from "../images/bg.png"

const Test = () => {
    const overallStyle = {
        margin:0,
        backgroundImage: `url(${bg})`,
        backgroundPosition: "90% 20%",
        backgroundAttachment: "fixed",
        height:"65vh"

    }

    return(
        <div style={overallStyle}>
            <Navbar active="/home"/>
            <div>
                qwdmqdlwmqdlqwd;lmqw
            </div>
        </div>
    )
}

export default Test