import React, { useState } from "react";
import colors from "./constantes/colors"
import menuLinks from "./constantes/links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { hover } from 'glamor'


const Navbar = (props) => {

    let linkHover = hover({ backgroundColor: colors.purple1 })

    const navbarStyles = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 14,
        paddingBottom: 14,
        background: colors.grey3,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
    }

    const ulStyles = {
        display: "flex",
        alignItems: "center",
        listStyleType:"none",
    }

    const linkStyles = {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16,
        textDecoration: "none",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        color: colors.grey8
    }


    return(
        <div style={navbarStyles}>
            <Link to="/">
                <StaticImage
                src="../images/icon.png"
                alt="Gatsby logo"
                placeholder="blurred"
                layout="fixed"
                width={24}
                height={24}
                to="/"
                />
            </Link>
            
            <ul style={ulStyles}>
                {menuLinks.map( link => {
                    return props.active == link.to ? 
                        <li key={link.name}>
                            <Link 
                            to={link.to} 
                            style={{...linkStyles, color: colors.purple8, backgroundColor: colors.purple2}}
                            >{link.name}
                            </Link>
                        </li>
                        : <li key={link.name} >
                            <Link
                            to={link.to} 
                            style={linkStyles}
                            {...linkHover}
                            >{link.name}
                            </Link>
                        </li>
                })}
            </ul>
            <Link to="/">
                <StaticImage
                src="../images/instagram.svg"
                alt="Gatsby logo"
                layout="fixed"
                width={24}
                height={24}
                to="/"
                />
            </Link>
        </div>
    )
}

export default Navbar