import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../container"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as variable from "../variables"
import MobileMenu from "../mobileMenu"

const HeaderStyle = styled.header`
  z-index: 2;
  width: 100%;
  background-size: cover;
  padding: 20px 0px;
  .header-social-container {
    padding: 8px 0px;
    @media (max-width: ${variable.tabletWidth}) {
      display: none;
    }
    .social-container {
      display: flex;
      justify-content: flex-end;
    }
    svg {
      font-size: 30px;
      path {
        color: white;
      }
    }
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .logo {
    max-width: 125px;
    width: 125px;
    img {
      max-width: 100%;
    }
  }

  .mobile-menu-container {
    width: 55px;
    margin-left: 20px;
  }
  ul.main-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    li {
      list-style: none;
      margin-right: 30px;
      position: relative;

      a {
        text-decoration: none;
        color: ${variable.bluegreen};
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0px;
        font-family: trajan-pro-3, serif;
        &:hover {
          color: ${variable.bluegreen};
          text-decoration: underline;
        }
      }
      .sub-menu {
        display: none;
        background-color: ${variable.blue};
        padding: 10px 20px 0px 20px;
        border: 1px solid #dadde9;
        position: absolute;
        top: 40px;
        left: -35px;
        z-index: 100;
        border-radius: 2px;
        min-width: 145px;
        animation-duration: 4s;
        a {
          color: ${variable.blue};
          font-size: 16px;
          margin-bottom: 10px;
          display: block;
          text-transform: capitalize;
          padding: 0px;
          font-weight: bold;
        }
      }
      &:hover .sub-menu {
        display: block;
      }
    }
  }
  .mobile-menu-container {
    display: none;
  }
  @media (max-width: ${variable.tabletWidth}) {
    .mobile-menu-container {
      display: block;
    }
    ul.main-menu {
      display: none;
    }
  }
`
const activeStyle = {
  color: variable.blue,
}

function menuRender(menuitem, lang) {
  if (
    menuitem.items[0].sub_nav_link_label.text != "" &&
    menuitem.items[0].sub_nav_link_label.text != "Dummy"
  ) {
    return (
      <div>
        <Link to={lang + menuitem.primary.link.url}>
          {menuitem.primary.label.text}
        </Link>
        <div className="sub-menu">
          {menuitem.items.map((submenuitem, index) => (
            <div key={index}>
              {submenuitem.sub_nav_link.url && (
                <Link to={lang + submenuitem.sub_nav_link.url}>
                  {submenuitem.sub_nav_link_label.text}
                </Link>
              )}
              {submenuitem.relative_link.text && (
                <Link to={lang + submenuitem.relative_link.text}>
                  {submenuitem.sub_nav_link_label.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    if (menuitem.primary.link.url != "") {
      return (
        <Link to={lang + menuitem.primary.link.url}>
          {menuitem.primary.label.text}
        </Link>
      )
    }
    if (menuitem.primary.relative_link) {
      return (
        <Link to={lang + menuitem.primary.relative_link.text}>
          {menuitem.primary.label.text}
        </Link>
      )
    }
  }
}

export const Header = props => {
  const data = useStaticQuery(graphql`
    query menu {
      site: allPrismicSiteInformation {
        nodes {
          data {
            nav {
              ... on PrismicSiteInformationNavNavItem {
                id
                items {
                  sub_nav_link {
                    url
                    link_type
                  }
                  sub_nav_link_label {
                    text
                  }
                  relative_link {
                    text
                  }
                }
                primary {
                  label {
                    text
                  }
                  link {
                    url
                    link_type
                  }
                  relative_link {
                    text
                  }
                }
              }
            }
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            twitter {
              url
            }
          }
        }
      }
    }
  `)
  const nav = data.site.nodes[0].data.nav
  const logo = data.site.nodes[0].data.logo.localFile.childImageSharp.fluid
  console.log(props.lang)
  return (
    <HeaderStyle className="header">
      <Container className="header-container">
        <Link className="logo" to={props.lang}>
          <Img fluid={logo} alt="logo" />
        </Link>
        <div className="mobile-menu-container">{<MobileMenu />}</div>
        <ul className="main-menu">
          {nav.map((menuitem, index) => (
            <li key={index}>{menuRender(menuitem, props.lang)}</li>
          ))}
        </ul>
      </Container>
    </HeaderStyle>
  )
}

export default Header