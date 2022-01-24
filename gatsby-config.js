module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: "My First Gatsby Site",
    },
    plugins: [
       
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `blog`,
            path: `${__dirname}/blog`,
        }
 
    },
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
               
],
};