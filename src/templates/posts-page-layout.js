import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/mdx.css"
import { Link } from "gatsby"
import { css } from 'glamor'
import colors from "../data/constantes/colors"
import Navbar from "../data/Navbar"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {

    let dateStyle = css({
        fontSize: 16,
        letterSpacing: "0.10vw",
        color: colors.purple5,
        padding: 10,
        borderBottom: "1px solid " + colors.grey7,
        marginBottom: 15,
        textAlign:"right",
    })

    let backHome = css({
        width:"100%", 
        textAlign:"center", 
        padding: "15px", 
        borderRadius:4, 
        backgroundColor: colors.purple2,
        boxShadow: "1px 1px 10px #E1DAEE"
    })

  return (
      <div>
          <Navbar active="/posts" />
            <div className="container">
                <h1>{ mdx.frontmatter.title }</h1>
                <p { ...dateStyle }>{ mdx.frontmatter.date }</p>
                <MDXProvider components ={  shortcodes }>
                    <MDXRenderer frontmatter = { mdx.frontmatter }>{ mdx.body }</MDXRenderer>
                </MDXProvider>
                <div { ...backHome }>
                    This is the end of the post. Thank you for reading.<Link to="/home">Go back home</Link>
                </div>
                
            </div>
      </div>
    
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "YYYYMMMMDo", locale: "zh_TW")
      }
    }
  }
`