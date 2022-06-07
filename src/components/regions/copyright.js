import React from "react"
import styled from "styled-components"
import Container from "../container"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import linkResolver from "../../utils/linkResolver"
import prismicHtmlSerializer from "../../gatsby/htmlSerializer"

const CopyStyle = styled.div`
  background-color:black;
  color:white;
  p{
    margin:0px;
    line-height:2;
    font-size:12px;
    text-align:center;
  }
`


export const Copyright = props => {
  const data = useStaticQuery(graphql`
    query copy {
      site: allPrismicSiteInformation(filter: { lang: { eq: "en-us" } }) {
        nodes {
          data {
            copyright {
              raw
            }
          }
        }
      }
    }
  `)
  return (
    <CopyStyle>
      <Container className="copy-container">
        <div className="copy-inner">
        <RichText
        render={data.site.nodes[0].data.copyright.raw}
        linkResolver={linkResolver}
        htmlSerializer={prismicHtmlSerializer}
      />
        </div>
      </Container>
    </CopyStyle>
  )
}

export default Copyright
