import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as variable from "../components/variables"
import styled from "styled-components"
import Container from "../components/container"
import BackgroundImage from "gatsby-background-image"
import BlogPostTeaser from "../components/entities/blog_post/BlogPostTeaser"
import loadable from "@loadable/component"
import "../components/scss/blocks/footer.scss"
import Img from "gatsby-image"

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
const InsightsStyle = styled.div`
  padding: 75px 0px;
  .blog-index-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    article {
      margin-bottom: 40px;
      width: calc((100%) / 3 - 25px);
      margin-right: 20px;
      &:nth-child(3n + 3) {
        margin-right: 0px;
      }
      @media (max-width: ${variable.tabletWidth}) {
        width: calc((100%) / 2 - 10px);
        &:nth-child(3n + 3) {
          margin-right: 20px;
        }
        &:nth-child(2n + 2) {
          margin-right: 0px;
        }
      }
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
        margin-right: 0px !important;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  .pager {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    .pager-next-container {
      min-width: 50px;
      a {
        background-color: #000000;
        color: white;
        padding: 9px 15px;
        border-radius: 10px;
        font-size: 18px;
        margin-top: 20px;
        display: inline-block;
        &:hover {
          background: #000000;
        }
      }
    }
    .pager-previous-container {
      min-width: 50px;
      a {
        background-color: #000000;
        color: white;
        padding: 9px 15px;
        border-radius: 10px;
        font-size: 18px;
        margin-top: 20px;
        display: inline-block;
        &:hover {
          background: #000000;
        }
      }
    }
  }
  .pager-container {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 9px 15px;
      border-radius: 10px;
      font-size: 18px;
      margin-top: 20px;
      display: inline-block;
      margin-left: 10px;
      background-color: white;
      border: 2px solid #000000;
      color: #000000;
      &:first-child {
        margin-left: 0px;
      }
      &:hover {
        background: #000000;
      }
      &[aria-current] {
        background-color: #000000;
        color: white;
      }
    }
  }
`

const InsightsHeader = styled.div`
  position: relative;
  section {
    padding: 0px !important;
  }
  .hero-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    p {
      color: white;
      max-width: 350px;
      font-size: 18px;
      line-height: 22px;
      margin: 0px;
    }
    h1 {
      max-width: 450px;
      /* margin-bottom: 25px; */
      margin-top: 40px;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
  }
  .hero-flex {
    min-height: 350px;
  }
`
const BlogPinned = styled.div`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
  .pinned-inner {
    display: flex;
    justify-content: space-between;
    padding: 90px 0px;
    @media (max-width: ${variable.mobileWidth}) {
      flex-direction: column;
    }
    .pinned-left {
      width: calc(50% - 17px);
      .blog-pinned-image-container {
        height: 100%;
        width: 100%;

        section {
          height: 100%;
          width: 100%;
          @media (max-width: ${variable.mobileWidth}) {
            min-height: 200px;
          }
        }
      }
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
      }
    }
    .pinned-right {
      width: calc(50% - 17px);
      /* background-image: url("../../images/LineGraphic.png"); */
      background-size: 300px;
      background-repeat: no-repeat;
      background-position: bottom right;
      color: #000000;
      h2 {
        font-size: 25px;
        line-height: 27px;
      }
      .blog-teaser {
        p {
          font-size: 17px;
        }
      }
      a {
        color: #000000;
        padding: 9px 20px;
        border-radius: 0px;
        border: 2px solid #000000;
        font-size: 18px;
        font-weight: 400;
        display: inline-block;
        border: 1px solid black;
        font-family: trajan-pro-3, serif;

        &:hover {
          color: white;
          background-color: #000000;
        }
      }
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
      }
    }
  }
`
// Sort and display the different slice options
const EntityResult = ({ blog }) => {
  return blog.nodes.map((post, index) => (
    <BlogPostTeaser post={post} key={index}></BlogPostTeaser>
  ))
}

// Sort and display the different slice options
const PostSlices = ({ slices, id }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case "basic_section":
          const BasicSectionSlice = loadable(() =>
            import(`../components/slices/BasicSectionSlice`)
          )
          return (
            <div
              id={"slice-id-" + slice.primary.slice_id.text}
              key={index}
              className="slice-wrapper slice-basic"
            >
              {<BasicSectionSlice slice={slice} />}
            </div>
          )
        case "columns_section":
          const ColumnSectionSlice = loadable(() =>
            import(`../components/slices/ColumnsSectionSlice`)
          )
          return (
            <div
              id={"slice-id-" + slice.primary.slice_id.text}
              key={index}
              className="slice-wrapper slice-columns"
            >
              {<ColumnSectionSlice slice={slice} />}
            </div>
          )
        default:
          return
      }
    })()
    return res
  })
}
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "",
    }
  }
  componentWillMount() {
    if (typeof window !== "undefined" && window) {
      var lang = localStorage.getItem("lang")
      if (lang) {
        this.setState({ lang: lang }, () => {})
      }
    }
  }
  render() {
    // const prismicContent = props.data.prismic.allBlog_posts.edges[0]
    // if (!prismicContent) return null
    // const node = props.data.page.data
    // const site = props.data.site
    var min_height = 350
    const defaultBlock = this.props.data.defaultBlockFr.data
    console.log(defaultBlock)

    // const defaultBlock = props.data.prismic.allBlocks.edges[0].node
    // const site = props.data.prismic.allSite_informations.edges[0].node
    const { currentPage, numPagesFr } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPagesFr
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    console.log(this.props.pageContext)
    console.log(this)
    return (
      <Layout>
        <InsightsHeader>
          <BackgroundImage fluid={this.props.data.blogbg.childImageSharp.fluid}>
            <Container className="hero-slice-container">
              <div className="hero-flex" style={{ minHeight: min_height }}>
                <h1>Latest news & updates FR</h1>
              </div>
            </Container>
          </BackgroundImage>
        </InsightsHeader>
        <BlogPinned>
          <Container className="blog-pinned">
            {this.props.data.blogpinned && (
              <div className="pinned-inner">
                <div className="pinned-left">
                  <div className="blog-pinned-image-container">
                    {returnImage(this.props.data.blogpinned.nodes[0])}
                  </div>
                </div>
                <div className="pinned-right">
                  <h2>{this.props.data.blogpinned.nodes[0].data.title.text}</h2>
                  {this.props.data.blogpinned.nodes[0].data.teaser && (
                    <div
                      className="blog-teaser"
                      dangerouslySetInnerHTML={{
                        __html: this.props.data.blogpinned.nodes[0].data.teaser
                          .html,
                      }}
                    />
                  )}
                  <Link
                    className="cta-button"
                    to={
                      "/fr-fr/blog/" + this.props.data.blogpinned.nodes[0].uid
                    }
                  >
                    Read the article
                  </Link>
                </div>
              </div>
            )}
          </Container>
        </BlogPinned>
        <InsightsStyle>
          <Container className="blog-index-container">
            <EntityResult blog={this.props.data.blog} />
          </Container>
          <Container className="pager">
            <div className="pager-previous-container">
              {!isFirst && (
                <Link to={"/fr-fr/blog" + prevPage} rel="prev">
                  Prev
                </Link>
              )}
            </div>

            <div className="pager-container">
              {Array.from({ length: numPagesFr }, (_, i) => (
                <Link
                  className="pager-link"
                  key={`pagination-number${i + 1}`}
                  to={`/insights${i === 0 ? "" : "/" + (i + 1)}`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
            <div className="pager-next-container">
              {!isLast && (
                <Link to={"/fr-fr/blog/" + nextPage} rel="next">
                  Next
                </Link>
              )}
            </div>
          </Container>
        </InsightsStyle>
        <div className="blog-post-right">
          <PostSlices slices={defaultBlock.body} id={defaultBlock.body[0].id} />
        </div>
      </Layout>
    )
  }
}

export default Post

export const postQuery = graphql`
  query blogListQueryFr($skip: Int!, $limit: Int!) {
    blogpinned: allPrismicBlogPost(
      sort: { order: DESC, fields: data___release_date }
      filter: { data: { blogpinned: { eq: true } }, lang: { eq: "fr-fr" } }
    ) {
      nodes {
        uid
        lang
        data {
          release_date(formatString: "MMM D Y")
          teaser {
            html
          }
          blogpinned
          author {
            text
          }
          title {
            text
          }
          main_image {
            url
            fluid(maxWidth: 475) {
              ...GatsbyPrismicImageFluid_withWebp_noBase64
            }
            localFile {
              childImageSharp {
                fluid(maxWidth: 475) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    blog: allPrismicBlogPost(
      sort: { order: DESC, fields: data___release_date }
      limit: $limit
      skip: $skip
      filter: { lang: { eq: "fr-fr" } }
    ) {
      nodes {
        uid
        lang
        data {
          release_date(formatString: "MMM D Y")
          teaser {
            html
          }
          blogpinned
          author {
            text
          }
          title {
            text
          }
          main_image {
            url
            fluid(maxWidth: 475) {
              ...GatsbyPrismicImageFluid_withWebp_noBase64
            }
            localFile {
              childImageSharp {
                fluid(maxWidth: 475) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    blogbg: file(relativePath: { eq: "InsightsHeader.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    site: allPrismicSiteInformation {
      nodes {
        data {
          description {
            text
          }
          site_url {
            text
          }
          site_title {
            text
          }
          twitter_author {
            text
          }
        }
      }
    }
    defaultBlock: prismicBlocks(
      uid: { eq: "global-footer" }
      lang: { eq: "en-us" }
    ) {
      data {
        body {
          ... on PrismicBlocksBodyColumnsSection {
            id
            slice_type
            primary {
              background_color
              slice_id {
                text
              }
              background_image {
                fluid(maxWidth: 1920) {
                  ...GatsbyPrismicImageFluid_withWebp_noBase64
                }
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              column_count
              font_color
              h1_title
              section_title {
                text
              }
            }
            items {
              content {
                raw
              }
            }
          }
          ... on PrismicBlocksBodyBasicSection {
            id
            slice_type
            primary {
              slice_id {
                text
              }
              background_color
              background_image {
                fluid {
                  ...GatsbyPrismicImageFluid_withWebp_noBase64
                }
                localFile {
                  mobilesmall: childImageSharp {
                    fluid(quality: 90, maxWidth: 360) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                  mobile: childImageSharp {
                    fluid(quality: 90, maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                  desktop: childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              background_video {
                url
              }
              content {
                html
                raw
              }
              font_color
              h1_title
              section_title {
                text
              }
              youtube_background {
                embed_url
              }
            }
          }
        }
      }
    }
    defaultBlockFr: prismicBlocks(
      uid: { eq: "global-footer" }
      lang: { eq: "fr-fr" }
    ) {
      data {
        body {
          ... on PrismicBlocksBodyColumnsSection {
            id
            slice_type
            primary {
              background_color
              slice_id {
                text
              }
              background_image {
                fluid(maxWidth: 1920) {
                  ...GatsbyPrismicImageFluid_withWebp_noBase64
                }
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              column_count
              font_color
              h1_title
              section_title {
                text
              }
            }
            items {
              content {
                raw
              }
            }
          }
          ... on PrismicBlocksBodyBasicSection {
            id
            slice_type
            primary {
              slice_id {
                text
              }
              background_color
              background_image {
                fluid {
                  ...GatsbyPrismicImageFluid_withWebp_noBase64
                }
                localFile {
                  mobilesmall: childImageSharp {
                    fluid(quality: 90, maxWidth: 360) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                  mobile: childImageSharp {
                    fluid(quality: 90, maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                  desktop: childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              background_video {
                url
              }
              content {
                html
                raw
              }
              font_color
              h1_title
              section_title {
                text
              }
              youtube_background {
                embed_url
              }
            }
          }
        }
      }
    }
  }
`
