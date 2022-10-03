import React from "react"
import PropTypes from "prop-types"
import Header from "../components/regions/header"
import Footer from "../components/regions/footer"
import Copyright from "../components/regions/copyright"
import "../components/scss/layout/layout.scss"
import Container from "./container"
import styled from "styled-components"
import { Link } from "gatsby"

const LangStyle = styled.header`
  background-color: #000000;
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  padding-bottom: 20px;
  color: white;
  div {
    margin-bottom: 10px;
    a {
      color: white;
    }
  }
  .change-lang {
    cursor: pointer;
  }
`
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.toggleLang = this.toggleLang.bind(this)
    this.state = {
      lang: "en-us",
      langLabel: "Français",
      confLabel: "Confidentiality Agreement",
    }
  }
  componentWillMount() {
    if (typeof window !== "undefined" && window) {
      var lang = localStorage.getItem("lang")
      var langLabel = localStorage.getItem("langLabel")
      var confLabel = localStorage.getItem("confLabel")
      if (lang) {
        this.setState({ lang: lang }, () => {})
        this.setState({ langLabel: langLabel }, () => {})
        this.setState({ confLabel: confLabel }, () => {})
        if (lang == "/fr-fr") {
          if (window.location.pathname.toLowerCase().indexOf("fr-fr") === -1) {
            window.location = window.location.origin + "/fr-fr"
          }
        }
      } else {
        var browserLang = navigator.language
        if (browserLang == "fr") {
          this.setState({ lang: "/fr-fr" })
          this.setState({ langLabel: "English" })
          this.setState({ confLabel: "Accord De Confidentialité" })
          localStorage.setItem("lang", "/fr-fr")
          localStorage.setItem("langLabel", "English")
          localStorage.setItem("confLabel", "Accord De Confidentialité")
          if (window.location.pathname.toLowerCase().indexOf("fr-fr") === -1) {
            window.location = window.location.origin + "/fr-fr"
          }
        }
      }
    }
  }
  toggleLang() {
    console.log(this)
    if (this.state.lang == "/fr-fr") {
      this.setState(state => ({ lang: "en-us" }))
      this.setState(state => ({ langLabel: "Français" }))
      this.setState(state => ({ confLabel: "Confidentiality Agreement" }))
      if (typeof window !== "undefined" && window) {
        localStorage.setItem("lang", "en-us")
        localStorage.setItem("langLabel", "Français")
        localStorage.setItem("confLabel", "Confidentiality Agreement")
        window.location = window.location.origin
      }
    } else {
      this.setState(state => ({ lang: "/fr-fr" }))
      this.setState(state => ({ langLabel: "English" }))
      this.setState(state => ({ confLabel: "Accord De Confidentialité" }))

      if (typeof window !== "undefined" && window) {
        localStorage.setItem("lang", "/fr-fr")
        localStorage.setItem("langLabel", "English")
        localStorage.setItem("confLabel", "Accord De Confidentialité")
        window.location = window.location.origin + "/fr-fr"
      }
    }
  }

  render() {
    if (this.props.slug) {
      var pageId = this.props.slug
    } else {
      var pageId = ""
    }
    var lang = ""
    if (this.state.lang == "/fr-fr") {
      lang = this.state.lang
    }
    return (
      <div id={pageId}>
        <Header
          lang={this.state.lang}
          toggleLang={this.toggleLang}
          state={this.state}
        />
        <main>{this.props.children}</main>
        <Footer lang={this.state.lang} />
        {/* <LangStyle>
          <Container>
            <div>
              <Link to={lang + "/confidentiality-agreement"}>
                {this.state.confLabel}
              </Link>
            </div>
            <div className="change-lang" onClick={() => this.toggleLang()}>
              {this.state.langLabel}
            </div>
          </Container>
        </LangStyle> */}
        <Copyright></Copyright>
      </div>
    )
  }
}

// const Layout = ({ children, slug }) => {
//   if (slug) {
//     var pageId = slug
//   } else {
//     var pageId = ""
//   }

//   return (
//     <div id={pageId}>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
