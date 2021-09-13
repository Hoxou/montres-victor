import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "glamor"
import colors from "../components/constantes/colors"
import Link from "./Link"

const Postcard = (props) => {

    let cardStyle = css({
        width:"25vw",
        borderRadius:8,
        paddingBottom: 32,
        overflow: "hidden",
        border: "1px solid black"
    })

    let textBoxStyle = css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:8,
        paddingTop:"1vw",
    })

    let titleStyle = css({
        fontSize: 20,
        width:"90%",
        letterSpacing: "0.15vw",
        color: colors.grey8,
    })

    let dateStyle = css({
        fontSize: 14,
        letterSpacing: "0.10vw",
        color: colors.purple5,
    })

    let descriptionStyle = css({
        fontSize: 15,
        fontFamily: "Yu Gothic",
        letterSpacing: "0.25vw",
        lineHeight: "2",
        height:"100px",
        color: colors.grey7, 
        textOverflow: "ellipsis",
        overflow: "hidden"
    })
    return(
        <div { ...cardStyle }>
            <div style={{width:"100%", border:"1px solid red"}}>
                <StaticImage
                    src="../images/cardbg.png"
                    alt="A Gatsby logo"
                    placeholder="none"
                    aspectRatio={1}
                    width="100%"
                    
            />
            </div>
            
            <div { ...textBoxStyle }>
                <p { ...dateStyle }>{ props.date }</p>
                <h1 { ...titleStyle }>{ props.title }</h1>
                <div style={{ whiteSpace: "nowrap" }}>
                    <p { ...descriptionStyle }>{ props.description }</p>
                </div>
            </div>
        </div>
    )
} 

export default Postcard