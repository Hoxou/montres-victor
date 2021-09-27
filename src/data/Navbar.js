import React from "react";
import colors from "./constantes/colors"
import menuLinks from "./constantes/links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { css, hover } from 'glamor'


const Navbar = (props) => {

    let menuHover = hover({ backgroundColor: colors.purple1 })

    const navbarStyles = {
        zIndex:1,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "3vw",
        paddingRight: "3vw",
        paddingTop: 16,
        paddingBottom: 16,
        background: colors.grey3,
        top: 0,
        left: 0,
        right: 0,
    }

    const logoStyles = css({
        display: "flex",
        gap:"1vw",
        textDecoration: "none"
    })

    const ulStyles = {
        display: "flex",
        alignItems: "center",
        listStyleType:"none",
        gap:"0.5vw",
    }

    const linkStyles = {
        paddingLeft: "2vw",
        paddingRight: "2vw",
        paddingTop: 10,
        paddingBottom: 10,
        textDecoration: "none",
        borderRadius: 4,
        borderBottomRightRadius: 4,
        overflow:"hidden",
    }


    return(
        <div style={navbarStyles}>
            <Link to="/home" style={{ textDecoration: "none" }}>
            <div { ...logoStyles }>
                <StaticImage
                    src="../images/logo.png"
                    alt="A Gatsby logo"
                    placeholder="tracedSVG"
                    layout="fixed"
                    height={24}
                />
                <p>維錶</p>
                
            </div>
            </Link>
            
            <ul style={ ulStyles }>
                {menuLinks.map( link => {
                    return props.active === link.to ? 
                        <li key={ link.name }>
                            <Link 
                            to={ link.to } 
                            style={{ ...linkStyles, color: colors.purple8, backgroundColor: colors.purple2 }}
                            >{ link.name }
                            </Link>
                        </li>
                        : <li key={ link.name } >
                            <Link
                            to={ link.to } 
                            style={ linkStyles }
                            { ...menuHover }
                            >{ link.name }
                            </Link>
                        </li>
                })}
            </ul>
            <a href="https://www.instagram.com/hauk000" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.grey8}stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
        </div>
    )
}

export default Navbar