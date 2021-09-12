import * as React from "react"
import colors from "./constantes/colors";

const Link = (props) => {
    const to = "../../.." + props.to;

    const linkStyles = {
        textTransform: "uppercase",
        color: colors.purple3,
        letterSpacing: "0.2vw",
        fontSize:14,
        width:"10vw"
    }
    


    return(
        <a style={{ ...linkStyles, alignSelf:"flex-end" }} href={to}>{props.text}</a>
    )
}


export default Link