import React from "react"
import * as variable from "../../variables"
import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Date } from "prismic-reactjs"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPostTeaserStyle = styled.article`
  /* padding: 15px; */
  text-decoration: none;
  position: relative;
  .blog-teaser {
    p {
      font-size: 17px;
    }
  }
  .blog-teaser-title {
    display: block;
    h2 {
      font-size: 20px;
      line-height: 23px;
      font-weight: 400;
      margin: 35px 0px 0px 0px;
      color: #000000;
      font-family: trajan-pro-3, serif;
    }
  }
  p {
    font-size: 17px;
    line-height: 25px;
    font-weight: 300;
    margin-top: 10px;
    color: #000000;
  }
  .blog-teaser-image-container {
    margin-bottom: 20px;

    .gatsby-image-wrapper {
      &:before {
        border-radius: 5px;
      }
      &:after {
        border-radius: 5px;
      }
    }
  }

  .cta-button {
    font-size: 16px;
    position: absolute;
    bottom: -20px;
    color: #000000;
    font-family: trajan-pro-3, serif;
    font-weight: 600;
  }
  .blog-teaser-image-container {
    height: 200px;
    width: 100%;
    margin-bottom: 20px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    &:before {
      background-size: cover;
    }
  }
`

function returnImage(post) {
  if (post.data.main_image != null) {
    if (post.data.main_image.fluid) {
      return (
        <BackgroundImage
          Tag="section"
          fluid={post.data.main_image.fluid}
        ></BackgroundImage>
      )
    }
  }
}
function returnLang(post) {
  var lang = ""
  console.log(post)
  if (post.lang == "fr-fr") {
    lang = "/fr-fr"
  }
  return lang
}
export const BlogPostTeaser = ({ post }) => {
  if (post.data.release_date) {
    const dates = new Date(post.data.release_date)
    const formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(dates)
  }

  return (
    <BlogPostTeaserStyle>
      <div className="blog-teaser-image-container">{returnImage(post)}</div>

      <Link
        className="blog-teaser-title"
        to={returnLang(post) + "/blog/" + post.uid}
      >
        {post.data.title.text && <h2>{post.data.title.text}</h2>}
      </Link>
      {/* {post.data.release_date && (
        <div className="release-date">{formattedDate}</div>
      )}
      {post.data.author && (
        <div className="blog-author">{post.data.author.text}</div>
      )} */}
      {post.data.teaser && (
        <div
          className="blog-teaser"
          dangerouslySetInnerHTML={{ __html: post.data.teaser.html }}
        />
      )}
      <Link className="cta-button" to={returnLang(post) + "/blog/" + post.uid}>
        Read more
      </Link>
    </BlogPostTeaserStyle>
  )
}

export default BlogPostTeaser
