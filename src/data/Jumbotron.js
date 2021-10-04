import * as React from "react"
import { css } from "glamor"
import bg from "../../blog/2021/2021-10-04-post-1/cover.jpeg"
import colors from "./constantes/colors"
import Link from "./Link"

const Jumbotron = ( props ) => {

    let overallStyle = css({
        position:"relative",
        margin:0,
        backgroundImage: `url(${bg})`,
        backgroundPosition: "70% 50%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height:"65vh"
    })
    
    let textBoxStyle = css({
        background: colors.textBoxGrad,
        width:"100%",
        maxWidth:"50rem",
        float:"right",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem",
        gap:"1vw"
    })

    let titleStyle = css({
        fontSize: 40,
        letterSpacing: "0.25vw",
        color: colors.grey1,
    })

    let dateStyle = css({
        fontSize: 14,
        letterSpacing: "0.10vw",
        color: colors.purple3,
    })

    let descriptionStyle = css({
        fontSize: 18,
        letterSpacing: "0.25vw",
        lineHeight: "2",
        color: colors.grey2,
    })

    return (
        <div { ...overallStyle }>
            <div { ...textBoxStyle } >
                <h1 { ...titleStyle }>{ props.title }</h1>
                <p { ...dateStyle }>{ props.date }</p>
                <p { ...descriptionStyle }>{ props.description }...</p>
                <Link to="/posts/2021/2021-10-04-post-1" text="See more"/>
            </div>
         </div>
    )
}

export default Jumbotron
