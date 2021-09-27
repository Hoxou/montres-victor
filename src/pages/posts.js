import * as React from "react"
import Navbar from "../data/Navbar"
import "../styles/index.css"


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