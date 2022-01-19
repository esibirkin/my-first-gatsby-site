import { graphql } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
         <p>Posted: { data.mdx.frontmatter.date}</p>
         <GatsbyImage
         image={image}
         alt={data.mdx.frontmatter.hero_image_alt}
         />
         <MDXRenderer>
             {data.mdx.body}
         </MDXRenderer>

        </Layout>
            )
}
export const query = graphql`
query ($id: String)  {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image 
        
      }
      body
    }
  }
  `
  
export default BlogPost