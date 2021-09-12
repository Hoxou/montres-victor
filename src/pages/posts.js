import * as React from "react"
import Navbar from "../components/Navbar"
import "../styles/index.css"
import colors from "../components/constantes/colors"

const Posts = () => {
    const overallStyle = {
        margin:0,
        height:"100vh"

    }

    return(
        <div style={overallStyle}>
            <Navbar active="/posts"/>
        </div>
    )
}

export default Posts