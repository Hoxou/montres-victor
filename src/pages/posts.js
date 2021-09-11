import * as React from "react"
import Navbar from "../components/navbar"
import icons from "../components/constantes/icons"
import "../styles/index.css"
import colors from "../components/constantes/colors"

const Posts = () => {
    const overallStyle = {
        margin:0,
        background: colors.navbg,
        height:"100vh"

    }

    return(
        <div style={overallStyle}>
            <Navbar active="/posts" logo={icons.logo}/>
        </div>
    )
}

export default Posts