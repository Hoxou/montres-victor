import * as React from "react"
import Postcard from "../data/Postcard"
import { useStaticQuery, graphql } from "gatsby"

const Postslist = () => {

  const data = useStaticQuery(graphql`
  query HeaderQuery {
      allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
        nodes {
          excerpt
          frontmatter {
            date(formatString: "YYYYMMMMDo", locale: "zh_TW")
            description
            title
          }
          slug
        }
      }
  }`);

  const posts = data.allMdx.nodes

  return (
    <header>
      <h1>{data.allMdx.nodes}</h1>
    </header>
  )
}

export default Postslist
