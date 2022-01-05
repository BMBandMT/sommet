import React from "react"
import PropTypes from "prop-types"
import Header from "../components/regions/header"
import Footer from "../components/regions/footer"
import "../components/scss/layout/layout.scss"
import Container from "./container"
import styled from "styled-components"

const LangStyle = styled.header`
  background-color: #000000;
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  padding-bottom: 20px;
  color: white;
  div {
    margin-bottom: 10px;
  }
`
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "",
      langLabel: "Français",
    }
  }
  componentWillMount() {
    if (typeof window !== "undefined" && window) {
      var lang = localStorage.getItem("lang")
      var langLabel = localStorage.getItem("langLabel")
      if (lang) {
        this.setState({ lang: lang }, () => {
          // console.log(this.state.lang)
        })
        this.setState({ langLabel: langLabel }, () => {
          // console.log(this.state.langLabel)
        })
      }
    }
  }
  toggleLang() {
    if (this.state.lang == "/fr-fr") {
      this.setState(state => ({ lang: "" }))
      this.setState(state => ({ langLabel: "Français" }))
      if (typeof window !== "undefined" && window) {
        localStorage.setItem("lang", "")
        localStorage.setItem("langLabel", "Français")
        window.location = "https://sommetproperties.netlify.app"
      }
    } else {
      this.setState(state => ({ lang: "/fr-fr" }))
      this.setState(state => ({ langLabel: "English" }))
      if (typeof window !== "undefined" && window) {
        localStorage.setItem("lang", "/fr-fr")
        localStorage.setItem("langLabel", "English")
        window.location = "https://sommetproperties.netlify.app/fr-fr"
      }
    }
  }

  render() {
    if (this.props.slug) {
      var pageId = this.props.slug
    } else {
      var pageId = ""
    }
    return (
      <div id={pageId}>
        <Header lang={this.state.lang} />
        <main>{this.props.children}</main>
        <Footer />
        <LangStyle>
          <Container>
            <div>Confidentiality Agreement</div>
            <div onClick={() => this.toggleLang()}>{this.state.langLabel}</div>
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
