import * as React from "react"
import Navbar from "../data/Navbar"
import Jumbotron from "../data/Jumbotron"
import "../styles/index.css"
import { Link,graphql } from "gatsby" 
import Postcard from "../data/Postcard"
import Commandbar from "../data/Commandbar"
import { css } from "glamor"



const Home = ({ data }) => {

    let listStyle = css({
        display: "flex",
        alignContent: "flex-start",
        flexWrap: "wrap",
        gap:"3vw",
        padding:"1vw",
    })

    const posts = data.allMdx.nodes
    return(
        <div>
            <Navbar active="/home"/>
            {posts.map(( post, index ) => {
            if (index == 0) {
                return(
                    <div key = { post.slug }>
                        <Jumbotron 
                        title = { post.frontmatter.title } 
                        date = { post.frontmatter.date } 
                        description = { post.frontmatter.description }
                        />
                    </div>
                )
            }
            })}
            
            <div style={{ ...listStyle, gap:"none" }}>
                <Commandbar title="Latest Posts"/>
                <div { ...listStyle }> 
                    {posts.map(( post, index ) => {
                        if (index != 0) {
                            return(
                                <div key = { post.slug }>
                                    <Link to = { post.slug } style= {{ textDecoration: "none" }}>
                                        <Postcard 
                                        featuredImgFluid = { post.frontmatter.featuredImage.childImageSharp.fluid } 
                                        title = { post.frontmatter.title } 
                                        date = { post.frontmatter.date } 
                                        description = { post.frontmatter.description }
                                        />
                                    </Link> 
                                </div>
                            )
                        }        
                    })}
                </div>  
            </div>       
        </div>
    )
}

export default Home

export const pageQuery = graphql`
{
    site {
        siteMetadata {
          description
          title
        }
    }
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
        nodes {
          excerpt
          frontmatter {
            date(formatString: "YYYYMMMMDo", locale: "zh_TW")
            description
            title
            featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          slug
        }
    }
}`

