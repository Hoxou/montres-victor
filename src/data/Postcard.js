import * as React from "react"
import { css } from "glamor"
import colors from "../data/constantes/colors"
import Img from "gatsby-image"

const Postcard = ( props ) => {


    let cardStyle = css({
        cursor:"pointer",
        width:"30vw",
        borderRadius:8,
        paddingBottom: 32,
        backgroundColor: colors.grey1,
        height:"100%",
        overflow: "hidden",
        ':hover': {
            opacity:"0.95",
            transition: "0.1s",
            filter: "drop-shadow(1px 1px 20px lightgrey)"
        },
        '@media (max-width: 671px)': {
            width:"100%"
          },
    })

    let textBoxStyle = css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:8,
        padding:"1vw",
        
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
        fontSize: 16,
        letterSpacing: "0.25vw",
        lineHeight: "2",
        color: colors.grey7, 
        textOverflow: "ellipsis",
        overflow: "hidden",
    })
    return(
        <div { ...cardStyle }> 
        <Img fluid={props.featuredImgFluid} />          
            <div { ...textBoxStyle }>
                <p { ...dateStyle }>{ props.date }</p>
                <h1 { ...titleStyle } className="line-clamp">{ props.title }</h1>
                <div style={{ whiteSpace: "nowrap"  }}>
                    <p { ...descriptionStyle } className="line-clamp">{ props.description }</p>
                </div>
                
            </div>
        </div>
    )
} 

export default Postcard