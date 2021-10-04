import React from "react";
import { css } from "glamor";
import colors from "./constantes/colors";
import menuLinks from "./constantes/links";
import { Link } from "gatsby";


const Footer = () => {

    let overallStyle = css({
        display:"flex",
        justifyContent: "center",
        height: "30vh",
        width: "100%",
        backgroundColor: colors.grey8,
        marginTop: "5vw",
        padding:"2vw 10vw",
        gap: "5vw",
        
    })

    let itemStyle = css({
        color: colors.grey1,
        textDecoration:"none",
        ':hover': {
            transition: "0.1s",
            textDecoration: "underline"
        },    
    })

    let pagesStyle = css({
        display:"flex",
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"space-between",
        paddingLeft:"1vw",
        borderLeft:"0.25px solid" + colors.grey7,
        height:"100%",
        '@media (max-width: 671px)': {
            display:"none",
          },
    })

    return (
        <div { ...overallStyle }>
            <div style={{...pagesStyle, alignSelf:"center"}}>
                    <p style={{ color:colors.grey1, fontStyle:"italic" }}>維錶 made with love to spread passion.</p>
            </div>
            <div {...pagesStyle}>
                <h4 style={{ color:colors.purple1, marginBottom:15 }}>Pages</h4>
                {menuLinks.map(link => {
                    return (
                        <div key={ link.name } style={{ flex:1 }}>
                            <Link {...itemStyle} to={link.to}>{ link.name }</Link>
                        </div>
                    )
               
                })}
            </div>
            <div {...pagesStyle}>
                <h4 style={{ color:colors.purple1, marginBottom:15 }}>Social</h4>
                <a href="https://www.instagram.com/hauk000" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.grey1}stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
            </div>
           
        </div>
    )
}

export default Footer