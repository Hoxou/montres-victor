import * as React from "react"

const Link = (props) => {
    const color = props.color;
    const text = props.text;
    const to = "../../.." + props.to;

    const linkStyles = {
        textTransform: "uppercase",
        color: color
    }
    


    return(
        <a style={linkStyles} href={to}>{text}</a>
    )
}


export default Link