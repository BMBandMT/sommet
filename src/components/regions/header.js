import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../container"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as variable from "../variables"
import MobileMenu from "../mobileMenu"

const HeaderStyle = styled.header`
  z-index: 2;
  width: 100%;
  background-size: cover;
  padding: 20px 0px;
  .flag {
    width: 20px;
    height: auto;
    position: absolute !important;
    top: -30px;
    right: 0px;
    cursor: pointer;
  }
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
    position: relative;
    li {
      list-style: none;
      margin-right: 30px;
      position: relative;
      &:nth-child(8) {
        margin-right: 0px;
      }
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
  if (lang == "en-us") {
    lang = ""
  } else {
    lang = "/fr-fr"
  }
  if (
    menuitem.items[0].sub_nav_link_label.text != "" &&
    menuitem.items[0].sub_nav_link_label.text != "Dummy"
  ) {
    return (
      <div>
        <Link to={lang + menuitem.primary.link.uid}>
          {menuitem.primary.label.text}
        </Link>
        <div className="sub-menu">
          {menuitem.items.map((submenuitem, index) => (
            <div key={index}>
              {submenuitem.sub_nav_link.url && (
                <Link to={lang + "/" + submenuitem.sub_nav_link.uid}>
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
        <Link to={lang + "/" + menuitem.primary.link.uid}>
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

class Header extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.toggleLang = props.toggleLang.bind(this)
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query menu {
            site: allPrismicSiteInformation(filter: { lang: { eq: "en-us" } }) {
              nodes {
                data {
                  nav {
                    ... on PrismicSiteInformationNavNavItem {
                      id
                      items {
                        sub_nav_link {
                          url
                          link_type
                          uid
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
                          uid
                        }
                        relative_link {
                          text
                        }
                      }
                    }
                  }
                  logo {
                    fluid(maxWidth: 400) {
                      ...GatsbyPrismicImageFluid_withWebp_noBase64
                    }
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
            sitefr: allPrismicSiteInformation(
              filter: { lang: { eq: "fr-fr" } }
            ) {
              nodes {
                lang
                data {
                  nav {
                    ... on PrismicSiteInformationNavNavItem {
                      id
                      items {
                        sub_nav_link {
                          url
                          link_type
                          uid
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
                          uid
                        }
                        relative_link {
                          text
                        }
                      }
                    }
                  }
                  logo {
                    fluid(maxWidth: 400) {
                      ...GatsbyPrismicImageFluid_withWebp_noBase64
                    }
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
            fraflag: file(name: { eq: "fraflag" }) {
              name
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            engflag: file(name: { eq: "engflag" }) {
              name
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `}
        render={data => {
          var nav = data.site.nodes[0].data.nav
          if (this.props.lang === "/fr-fr") {
            nav = data.sitefr.nodes[0].data.nav
          }
          const logo = data.site.nodes[0].data.logo.fluid
          // var rootPath = "https://sommetproperties.netlify.app" + props.lang
          var rootPath = ""
          if (typeof window !== "undefined" && window) {
            rootPath = window.location.origin
            if (this.props.lang == "/fr-fr") {
              rootPath = window.location.origin + this.props.lang
            }
          }
          return (
            <HeaderStyle className="header">
              <Container className="header-container">
                <Link className="logo" to={rootPath}>
                  <Img fluid={logo} alt="logo" />
                </Link>
                <div className="mobile-menu-container">
                  {
                    <MobileMenu
                      lang={this.props.lang}
                      nav={nav}
                      toggleLang={this.props.toggleLang}
                      state={this.props.state}
                    />
                  }
                </div>

                <ul className="main-menu">
                  <div onClick={this.props.toggleLang}>
                    {this.props.lang === "/fr-fr" ? (
                      <Img
                        className="flag"
                        fluid={data.engflag.childImageSharp.fluid}
                      />
                    ) : (
                      <Img
                        className="flag"
                        fluid={data.fraflag.childImageSharp.fluid}
                      />
                    )}
                  </div>
                  {nav.map((menuitem, index) => (
                    <li key={index}>{menuRender(menuitem, this.props.lang)}</li>
                  ))}
                </ul>
              </Container>
            </HeaderStyle>
          )
        }}
      />
    )
  }
}

export default Header
