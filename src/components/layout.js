import React from "react"
import PropTypes from "prop-types"
import Header from "../components/regions/header"
import Footer from "../components/regions/footer"
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
    this.state = {
      lang: "",
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
        this.setState({ lang: lang }, () => {
          // console.log(this.state.lang)
        })
        this.setState({ langLabel: langLabel }, () => {
          // console.log(this.state.langLabel)
        })
        this.setState({ confLabel: confLabel }, () => {
          // console.log(this.state.langLabel)
        })
        // if (lang == "/fr-fr" && window.location.pathname != "/fr-fr") {
        //   window.location = window.location.origin + lang
        // }
      }
    }
  }
  toggleLang() {
    if (this.state.lang == "/fr-fr") {
      this.setState(state => ({ lang: "" }))
      this.setState(state => ({ langLabel: "Français" }))
      this.setState(state => ({ confLabel: "Confidentiality Agreement" }))
      if (typeof window !== "undefined" && window) {
        localStorage.setItem("lang", "")
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
    console.log(this)

    if (this.props.slug) {
      var pageId = this.props.slug
    } else {
      var pageId = ""
    }
    return (
      <div id={pageId}>
        <Header lang={this.state.lang} />
        <main>{this.props.children}</main>
        <Footer lang={this.state.lang} />
        <LangStyle>
          <Container>
            <div>
              <Link to={this.state.lang + "/confidentiality-agreement"}>
                {this.state.confLabel}
              </Link>
            </div>
            <div className="change-lang" onClick={() => this.toggleLang()}>
              {this.state.langLabel}
            </div>
          </Container>
        </LangStyle>
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
