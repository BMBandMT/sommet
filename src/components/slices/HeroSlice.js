import styled from "styled-components"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import Container from "../container"

const HeroStyle = styled.div`
  position: relative;
  section {
    padding: 0px !important;
  }
  .hero-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-weight: 800;
    font-size: 60px;
    line-height: 90px;
    color: white !important;
  }
  .hero-flex {
    min-height: 350px;
  }
`

export const HeroSlice = ({ slice }) => {
  var font_color = "white"
  var fluid = null
  var hero_title = null
  var min_height = 455
  if (slice.primary.background_image != null) {
    fluid = slice.primary.background_image.fluid
  }

  if (slice.primary.font_color != null) {
    font_color = slice.primary.font_color
  }

  if (slice.primary.hero_title != null) {
    hero_title = slice.primary.hero_title.text
  }

  if (slice.primary.min_height != null) {
    min_height = slice.primary.min_height
  }

  return (
    <HeroStyle>
      {fluid && (
        <BackgroundImage Tag="section" fluid={fluid}>
          <Container className="hero-slice-container">
            <div className="hero-flex" style={{ minHeight: min_height }}>
              <h1 style={{ color: font_color }}>{hero_title}</h1>
            </div>
          </Container>
        </BackgroundImage>
      )}
    </HeroStyle>
  )
}

export default HeroSlice
