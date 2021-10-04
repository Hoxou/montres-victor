import * as React from "react"
import Navbar from "../data/Navbar"
import "../styles/index.css"
import { Link } from "gatsby"
import colors from "../data/constantes/colors"
import Footer from "../data/Footer"

const About = () => {
    const overallStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin:0,
        height: "90vh",
        lineHeight: "2vw"
    }

    return(
        <div>
            <Navbar active="/about"/>
            <div style={overallStyle}>
                <p style={{ lineHeight: 2 }}><i>This feature is not available now.<br /> If you wish to read blog posts, please refer to the <Link to= "/home" style={{ color: colors.purple8, backgroundColor: colors.purple2, padding: 5, borderRadius: 5 }}> home page</Link> content.</i></p>
            </div>
            <Footer />
        </div>
        
    )
}

export default About