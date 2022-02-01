import React from "react"
// import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import * as variable from "../components/variables"
import Img from "gatsby-image"

const MobileContainer = styled.div`
  .menu-container {
    span {
      background-color: #000000;
    }
  }
  display: none;
  position: relative;
  height: 30px;
  width: 55px;
  text-align: center;
  margin: 0px;
  padding: 0px;
  .dark-mode {
    display: flex !important;
    justify-content: center;
  }
  ul {
    padding-left: 0px;
  }
  li {
    font-size: 30px;
    font-weight: 600;
    margin: 0px 0px 20px 0px !important;
    padding: 0px;
    list-style: none;
    text-align: left;
    &:focus {
      outline: none !important;
    }
    a {
      display: block !important;
      text-align: left;
      color: #000000;
      text-decoration: none;
      font-size: 27px;
      &:focus {
        outline: none !important;
      }
      &.active {
        color: #000000;
      }
    }
    ul {
      flex-direction: column;
      justify-content: center !important;
      width: 100% !important;
      margin: 0px;
      padding: 0px;
    }
  }
  .menu-container {
    padding: 40px 30px;
    &:focus {
      outline: none !important;
    }
    img {
      max-width: 150px;
    }
  }
  @media (max-width: ${variable.tabletWidth}) {
    display: block;
    .bm-menu-wrap {
      top: 0px;
    }
    .bm-overlay {
      left: 0;
      top: 0;
    }
    .bm-cross {
      background: ${variable.blue};
    }
    .bm-burger-bars {
      background: ${variable.blue};
      border-radius: 10px;
    }
    .bm-menu {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
  @media (max-width: ${variable.tabletWidth}) {
    display: block;
  }
`
const activeStyle = {
  color: variable.blue,
}
const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`

const MenuToggle = styled.div`
  position: ${props => (props.open ? "fixed" : "relative")};
  z-index: 9999;
  width: 40px;
  height: 40px;
  transform: rotate(0deg);
  transition: all 0.25s ease-in;
  cursor: pointer;
  margin-left: auto;
  top: ${props => (props.open ? "28px" : "auto")};
  right: ${props => (props.open ? "20px" : "auto")};
  span {
    display: block;
    position: absolute;
    height: 7px;
    width: 100%;
    background: #ffffff;
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${props =>
      props.open ? "all 0.25s ease-in" : "all 0.25s ease-out"};
    box-shadow: -2px 4px 4px #000000;
  }
  span:nth-child(1) {
    top: ${props => (props.open ? "calc(50% - 3.5px)" : "10%")};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${props => (props.open ? 0 : "calc(50% - 3.5px)")};
    left: ${props => (props.open ? "calc(50% - 3.5px)" : null)};
    width: ${props => (props.open ? "7px" : null)};
    height: ${props => (props.open ? "100%" : null)};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 8px);
    transform-origin: left center;
    width: ${props => (props.open ? 0 : null)};
    opacity: ${props => (props.open ? 0 : 1)};
  }
`

const RotateContainer = styled.div`
  height: 100%;
  width: 100%;
  transition: ${props =>
    props.open ? "all 0.25s ease-in-out" : "all 0.25s ease-in-out"};
  transform: ${props => (props.open ? "rotate(-45deg)" : "none")};
`

const MenuWrapper = styled.div`
  position: relative;
  .flag {
    width: 20px;
    height: auto;
    position: absolute !important;
    top: -50px !important;
    right: 0px;
    cursor: pointer;
  }
  position: fixed;
  overflow: hidden;
  right: ${props => (props.open ? "0" : "-100%")};
  top: 0;
  z-index: 999;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  transition: ${props =>
    props.open ? "all 0.25s ease-out" : "all 0.6s ease-out"};
  box-shadow: 0px 4px 20px -5px #e8e8e8;
  padding: 40px 30px;
  ul {
    padding-left: 0px;
    position: relative;
  }
  li {
    font-size: 30px;
    font-weight: 600;
    margin: 0px 0px 20px 0px !important;
    padding: 0px;
    list-style: none;
    text-align: left;
    &:focus {
      outline: none !important;
    }
    a {
      display: block !important;
      text-align: left;
      color: #000000;
      text-decoration: none;
      font-size: 27px;
      text-transform: uppercase;
      &:focus {
        outline: none !important;
      }
      &.active {
        color: #000000;
      }
    }
    ul {
      flex-direction: column;
      justify-content: center !important;
      width: 100% !important;
      margin: 0px;
      padding: 0px;
      position: relative;
    }
  }
`

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

const SubMenuReturn = ({ submenuitem, index }) => {
  if (
    submenuitem.sub_nav_link_label.text != "Dummy" &&
    submenuitem.id != "undefined"
  ) {
    return (
      <li key={submenuitem.id}>
        <Link activeStyle={activeStyle} to={submenuitem.sub_nav_link.url}>
          {submenuitem.sub_nav_link_label.text}
        </Link>
      </li>
    )
  } else {
    return ""
  }
}
class Mobilemenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }
  // handleStateChange(state) {
  //   this.setState({ menuOpen: state.isOpen })
  // }

  // closeMenu() {
  //   this.setState({ menuOpen: false })
  // }

  // toggleMenu() {
  //   this.setState(state => ({ menuOpen: !state.menuOpen }))
  // }

  render() {
    console.log(this.props)
    return (
      <StaticQuery
        query={graphql`
          query {
            site: allPrismicSiteInformation {
              nodes {
                data {
                  nav {
                    ... on PrismicSiteInformationNavNavItem {
                      id
                      items {
                        sub_nav_link {
                          id
                          link_type
                        }
                        sub_nav_link_label {
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
        render={data => (
          <>
            <div id="mobile-menu-header">
              <div className="menu-container">
                <MenuToggle
                  onClick={() => this.toggleMenu()}
                  open={this.state.menuOpen}
                >
                  <RotateContainer open={this.state.menuOpen}>
                    <span />
                    <span />
                    <span />
                  </RotateContainer>
                </MenuToggle>
              </div>
            </div>
            <MenuWrapper open={this.state.menuOpen}>
              <div className="menu-wrap-inner" open={this.state.menuOpen}>
                <ul>
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
                  {this.props.nav.map((menuitem, index) => (
                    <li key={index}>{menuRender(menuitem, this.props.lang)}</li>
                  ))}
                </ul>
              </div>
            </MenuWrapper>
            {/* <MobileContainer>
              <Menu
                right
                noOverlay
                isOpen={this.state.menuOpen}
                width={240}
                onStateChange={state => this.handleStateChange(state)}
              >
                <div className="menu-container">
                  <ul>
                    <li>
                      <Link
                        to="/"
                        activeClassName="active"
                        onClick={() => this.toggleMenu()}
                        activeStyle={activeStyle}
                      >
                        Home
                      </Link>
                    </li>
                    {data.allPrismicSiteInformation.nodes[0].data.nav.map(
                      (menuitem, index) => (
                        <li key={menuitem.id}>
                          {menuitem.primary.link.id && (
                            <Link
                              activeStyle={{ color: variable.darkgray }}
                              to={menuitem.primary.link.url}
                              onClick={() => this.toggleMenu()}
                              activeClassName="active"
                              activeStyle={activeStyle}
                            >
                              {menuitem.primary.label.text}
                            </Link>
                          )}
                          {!menuitem.primary.link.id && (
                            <Link
                              activeStyle={{ color: variable.darkgray }}
                              to={menuitem.primary.relative_link.text}
                              onClick={() => this.toggleMenu()}
                              activeClassName="active"
                              activeStyle={activeStyle}
                            >
                              {menuitem.primary.label.text}
                            </Link>
                          )}
                          {menuitem.items[0].sub_nav_link && (
                            <ul className="sub-menu">
                              {menuitem.items.map((submenuitem, index) => {
                                if (submenuitem.id) {
                                  return (
                                    <SubMenuReturn
                                    submenuitem={submenuitem}
                                    index={index}
                                  />  
                                  )
                                }
                              })}
                            </ul>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Menu>
            </MobileContainer> */}
          </>
        )}
      />
    )
  }
}

export default Mobilemenu
