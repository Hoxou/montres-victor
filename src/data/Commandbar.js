import * as React from "react"
import { css } from "glamor"
import colors from "./constantes/colors";

const Commandbar = ( props ) => {

    let barStyle = css({
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        padding:"2vw",
        letterSpacing: "0.2vw",
        textTransform: "uppercase",
        flex:1,
    })
    
    return (
        <div { ...barStyle }>
            <h4 style={{ color: colors.purple8 }}>{ props.title }</h4>
        </div>
    )
}

export default Commandbar