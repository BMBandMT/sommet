import React from "react"
import Container from "../container"
import styled from "styled-components"
import * as variable from "../variables"
import phoneIcon from "../../images/phoneicon.png"
import emailIcon from "../../images/email.png"
import locationIcon from "../../images/locationicon.png"
const ContactStyle = styled.div`
  padding: 160px 0px 60px 0px;
  margin: 0 auto;
  max-width: 720px;
  h2 {
    font-size: 30px;
    /* line-height: 0.5; */
    text-align: center;
    margin: 0px;
  }
  p {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .contact-outer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    form {
      width: 100%;
    }
  }
  .contact-form-left {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    form {
      /* background-image: url("../../../images/FormBackground.png"); */
      padding: 40px;
      border-radius: 2px;
      background-color: #ffffff;
    }
    p {
      &:first-child {
        font-weight: 300;
      }
    }
    @media (max-width: ${variable.mobileWidth}) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
  .contact-form-right {
    width: 25%;
    font-size: 17px;
    line-height: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: ${variable.mobileWidth}) {
      width: 100%;
    }
    a {
      font-size: 17px;
      line-height: 23px;
    }
    .contact-phone {
      margin-bottom: 20px;
      background-image: url(${phoneIcon});
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: left top;
      padding-left: 40px;
    }
    .contact-email {
      margin-bottom: 20px;
      background-image: url(${emailIcon});
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: left top;
      padding-left: 40px;
    }
    .contact-address {
      background-image: url(${locationIcon});
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: left top;
      padding-left: 40px;
      div {
        &:last-child {
          font-weight: 300;
          line-height: 20px;
        }
        &:nth-child(2) {
          font-weight: 300;
          line-height: 20px;
        }
      }
    }
  }
  input {
    width: 100%;
    -webkit-appearance: none;
    border: 2px solid #000000;
    border-radius: 7px;
    padding: 15px 20px;
    font-size: 17px;
    font-weight: 300;
    &::placeholder {
      color: #000000;
      font-size: 17px;
      font-weight: 300;
    }
  }
  textarea {
    width: 100%;
    -webkit-appearance: none;
    border: 2px solid #000000;
    border-radius: 7px;
    padding: 15px 20px;
    height: 240px;
    font-size: 17px;
    font-weight: 300;
    line-height: 24px;
    &::placeholder {
      color: #000000;
      font-size: 17px;
      font-weight: 300;
    }
  }
  .hidden {
    display: none;
    -webkit-appearance: none;
  }
  .submit-holder {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact-submit {
    color: white;
    background-color: #000000;
    padding: 12px 20px;
    font-size: 16px;
    margin-top: 25px;
    display: inline-block;
    width: auto;
    text-transform: uppercase;
    font-family: trajan-pro-3, serif;
  }
  .email-phone {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 25px 0px;
    input {
      width: calc(50% - 6px);
    }
  }
  .contact-copy-bottom {
    text-align: center;
    margin-top: 40px;
    h2 {
      font-size: 30px;
    }
    .contact-phone2 {
      font-size: 20px;
      margin-bottom: 12px;
      div {
        &:nth-child(1) {
          font-weight: bold;
        }
      }
    }
    .contact-email2 {
      font-size: 20px;
      div {
        &:nth-child(1) {
          font-weight: bold;
        }
      }
    }
  }
`
export const ContactSlice = ({ slice }) => {
  return (
    <Container>
      <ContactStyle>
        <div className="contact-outer">
          <div className="contact-form-left">
            <div class="contact-top-copy">
              <h2>Contact Us</h2>
              <h2>& Join Our Community</h2>
              <p>
                To learn more about purchasing a home in Teranga Estates, as
                well as home pricing and model options, please reach out to our
                team.
              </p>
            </div>
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name*"
                required
              />
              <div className="email-phone">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                />

                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone*"
                  required
                />
              </div>

              <textarea id="message" name="message" placeholder="Message" />
              <div className="submit-holder">
                <input
                  type="submit"
                  className="contact-submit"
                  value="Send Message*"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </ContactStyle>
    </Container>
  )
}

export default ContactSlice
