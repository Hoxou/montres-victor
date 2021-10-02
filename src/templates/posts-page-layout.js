import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/mdx.css"
import { Link } from "gatsby"
import { css, hover } from 'glamor'
import colors from "../data/constantes/colors"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {

    let linkStyles = css({
        padding: "10",
        textDecoration: "none",
        borderRadius: 4,
        borderBottomRightRadius: 4,
        border:"1px solid red"
    })

    let dateStyle = css({
        fontSize: 16,
        letterSpacing: "0.10vw",
        color: colors.purple5,
    })

  return (
    <div className="container">
      <h1>{ mdx.frontmatter.title }</h1>
      <p { ...dateStyle }>{ mdx.frontmatter.date }</p>
      <Link to="../.." { ...linkStyles }>Home page</Link>
      <MDXProvider components ={  shortcodes }>
        <MDXRenderer frontmatter = { mdx.frontmatter }>{ mdx.body }</MDXRenderer>
      </MDXProvider>
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