import * as React from "react"
import {Link} from "gatsby"
const IndexPage = () => {
  return (
    <main> 
      <title>Yjmt Pages</title>
      <h1> Welcam to my Gatsby site </h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following rhe gatsby Tutorial.</p>
    </main>
  )
}

export default IndexPage
