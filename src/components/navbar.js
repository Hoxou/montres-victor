import * as React from "react"
import icons from "./constantes/icons"
import colors from "./constantes/colors"
import { StaticImage } from "gatsby-plugin-image"


const Navbar = (props) => {

    const navbarStyles = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.grey1,

    }


    return(
        <div style={navbarStyles}>
            <StaticImage
                src="../images/icon.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="fixed"
                width={24}
                height={24}
            />
            <ul>
                <li><img src={icons.home}/>Home</li>
                <li>Post</li>
                <li>Photos</li>
                <li>Watch vocabulary</li>
                <li>About me</li>
            </ul>
            <img src={icons.instagram}/>
        </div>
    )
}

export default Navbar