import * as React from "react"
import colors from "./constantes/colors"
import menuLinks from "./constantes/links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"



const Navbar = (props) => {
    
    const navbarStyles = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 32,
        paddingRight: 32
    }

    const ulStyles = {
        display: "flex",
        alignItems: "center",
        listStyleType:"none",
        margin:0,
        padding:0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }

    const liStyles = {
        textDecoration: "none",
    }

    const linkStyles = {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16,
        textDecoration: "none",
        color:colors.grey1,
    }

    const activeLiStyle = {
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        color: colors.purple8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "white",
        textDecoration: "none",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }

    const activeLinkStyle = {
        color: colors.purple8,
        backgroundColor: "white",
        textDecoration: "none",
    }


    return(
        <div style={navbarStyles}>
            <Link to="/"><StaticImage
                src="../images/icon.png"
                alt="Gatsby logo"
                placeholder="blurred"
                layout="fixed"
                width={24}
                height={24}
                to="/"
            /></Link>
            
            <ul style={ulStyles}>
                {menuLinks.map( link => {
                    return props.active == link.to ? 
                        <li key={link.name} style={activeLiStyle}>
                            <Link to={link.to} style={activeLinkStyle}>{link.name}</Link>
                        </li>
                        : <li key={link.name} style={liStyles}><Link to={link.to} style={linkStyles}>{link.name}</Link></li>
                    
                })}
            </ul>
            <StaticImage
                src="../images/icon.png"
                alt="Gatsby logo"
                placeholder="blurred"
                layout="fixed"
                width={24}
                height={24}
            />
        </div>
    )
}

export default Navbar