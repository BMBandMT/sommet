import styled from "styled-components"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import Container from "../container"
import BlogPostTeaser from "../entities/blog_post/BlogPostTeaser"
import * as variable from "../variables"

const EntityQueryStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  article {
    margin-bottom: 40px;
    width: calc((100%) / 3 - 45px);
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
`

// Sort and display the different slice options
const EntityResult = ({ slice, blog, lang }) => {
  // return slices.map((slice, index) => {
  //   const res = () => {
  //     switch (slice.slice_type) {
  //       case "text":
  //         return (
  //           <div key={index} className="slice-wrapper slice-text">
  //             {<Text slice={slice} />}
  //           </div>
  //         )
  //     }
  //   }
  // })

  if (slice.primary.entity_type == "Blog Post") {
    return blog.nodes
      .filter(blog => blog.lang === lang)
      .slice(0, slice.primary.number_of_entities)
      .map((post, index) => (
        <BlogPostTeaser post={post} key={index}></BlogPostTeaser>
      ))
  }
}

export const EntityQuerySlice = ({ slice, blog }) => {
  var fluid = null

  var h1_title = false

  var bg_color = null

  var entityCount = null

  if (slice.primary.background_image != null) {
    fluid = slice.primary.background_image.fluid
  }

  if (slice.primary.background_color != null) {
    bg_color = slice.primary.background_color
  }

  if (slice.primary.number_of_entities != null) {
    var entityCount = slice.primary.number_of_entities
  }

  var theh1Title = null
  var theh2Title = null
  if (slice.primary.section_title && slice.primary.h1_title == true) {
    var theh1Title = slice.primary.section_title.text
  } else if (slice.primary.section_title && slice.primary.h1_title == false) {
    var theh2Title = slice.primary.section_title.text
  } else if (slice.primary.section_title && slice.primary.h1_title == false) {
    var theh2Title = slice.primary.section_title[0].text
  }
  var theh2 = null
  if (slice.primary.section_title) {
    if (slice.primary.section_title.text !== "") {
      theh2 = slice.primary.section_title.text
    }
  }
  var lang = "en-us"
  if (slice.primary.language == "French") {
    lang = "fr-fr"
  }
  return (
    <React.Fragment>
      {fluid && (
        <BackgroundImage
          Tag="section"
          fluid={fluid}
          style={{ backgroundColor: bg_color }}
        >
          <Container>
            {/* <section>
              {h1_title && <h1>{slice.primary.section_title.text}</h1>}
              {!h1_title && <h2>{slice.primary.section_title.text}</h2>}
              <EntityResult
                slice={slice}
                blog={blog}
                leadership={leadership}
                job={job}
              />
              <EntityQueryStyle>
                {blog.nodes.slice(0, entityCount).map((post, index) => (
                  <BlogPostTeaser post={post} key={index}></BlogPostTeaser>
                ))}
              </EntityQueryStyle>
            </section> */}
          </Container>
        </BackgroundImage>
      )}
      {!fluid && (
        <div style={{ backgroundColor: bg_color }}>
          <Container>
            <section>
              {theh2 && (
                <h2 class="entity-section-header">
                  {slice.primary.section_title.text}
                </h2>
              )}
              <EntityQueryStyle>
                <EntityResult slice={slice} blog={blog} lang={lang} />
              </EntityQueryStyle>
            </section>
          </Container>
        </div>
      )}
    </React.Fragment>
  )
}

export default EntityQuerySlice
