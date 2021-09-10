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
        background: colors.navbg,
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


    const activeStyle = {
        color: colors.purple8,
        backgroundColor: "white",
        marginLeft: 8,
        textDecoration: "none",
    }

    const activeLiStyle = {
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        color: colors.purple8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "white",
        textDecoration: "none",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }


    return(
        <div style={navbarStyles}>
            <StaticImage
                src="../images/icon.png"
                alt="Gatsby logo"
                placeholder="blurred"
                layout="fixed"
                width={24}
                height={24}
            />
            <ul style={ulStyles}>
                {menuLinks.map( link => {
                    return link.name == "Home" ? 
                    <li key={link.name} style={activeLiStyle}>
                        <StaticImage
                            src="../images/icon.png"
                            alt="Gatsby logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={16}
                            height={16}
                            style={activeStyle}
                        />
                        <Link to={link.to} style={activeStyle}>{link.name}</Link>
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