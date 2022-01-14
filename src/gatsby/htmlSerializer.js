import React from "react"
import { Link } from "gatsby"
import ResponsiveEmbed from "react-responsive-embed"

const documentResolver = (doc, content) => {
  return (
    <a target="_blank" href={doc.url} download>
      {content}
    </a>
  )
}
const linkResolver = (doc, content, linkClass) => {
  // Route for blog posts
  // console.log(doc)
  if (doc.lang == "fr-fr") {
    return (
      <Link to={"/fr-fr/" + doc.uid} className={linkClass}>
        {content}
      </Link>
    )
  }
  if (doc.type === "blog_post") {
    return (
      <Link to={"/blog/" + doc.uid} className={linkClass}>
        {content}
      </Link>
    )
  }
  if (doc.uid === "learn-how-to-protect-microsoft-365-data") {
    return (
      <Link to={"/webinars/" + doc.uid} className={linkClass}>
        {content}
      </Link>
    )
  }
  if (doc.type === "pa") {
    return (
      <Link to={"/" + doc.uid} className={linkClass}>
        {content}
      </Link>
    )
  }
  // Homepage route fallback
  return (
    <Link to={"/"} className={linkClass}>
      {content}
    </Link>
  )
}

const htmlSerializer = (type, element, content, children) => {
  console.log(type)
  var link = ""
  switch (type) {
    case "embed":
      var video_id = element.oembed.embed_url.split("v=")[1]
      var ampersandPosition = video_id.indexOf("&")
      if (ampersandPosition !== -1) {
        video_id = video_id.substring(0, ampersandPosition)
      }

      return (
        <div className="video-container">
          <ResponsiveEmbed
            src={"https://www.youtube.com/embed/" + video_id}
            allowfullscreen
          />
        </div>
      )

    case "hyperlink":
      console.log(element.data)
      if (element.data.link_type == "Document") {
        if (children[0].props != null) {
          var linkClass = children[0].props.className
          if (children[0].props.className != undefined) {
          } else {
            var linkClass = ""
          }
        }

        link = linkResolver(element.data, content, linkClass)
        return link
      }
      if (element.data.link_type == "Media") {
        if (element.data.kind == "document") {
          var thedocument = documentResolver(element.data, content)
          return thedocument
        }
      }
    case "image":
      const width = element.dimensions.width ? element.dimensions.width : ""
      const height = element.dimensions.height ? element.dimensions.height : ""
      const alt = element.alt ? element.alt : ""
      if (element.url) {
        return (
          <p className="block-img">
            <img src={element.url} width={width} height={height} alt={alt} />
          </p>
        )
      } else {
        return ""
      }
    // First differentiate between a label and a preformatted field (e.g. the Code Block slice)
    default: {
      return null
    }
  }
}

// module.exports = htmlSerializer
export default htmlSerializer
