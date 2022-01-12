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
    line-height: 1.2;
    text-align: center;
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
      color: #000000;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: calc(50% - 10px);
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        &.income-currency,
        &.city-country {
          input,
          select {
            width: calc(50% - 7px);
          }
        }
      }
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
  input[type="text"],
  select,
  input[type="email"],
  input[type="phone"] {
    -webkit-appearance: none;
    border: 2px solid #000000 !important;
    border-radius: 0px;
    padding: 15px 20px;
    font-size: 17px;
    font-weight: 300;
    outline: none !important;
    width: 100%;
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
    justify-content: center !important;
    width: 100% !important;
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
  .interested {
    width: 100% !important;
    display: block;
    margin-bottom: 0px !important;
  }
  .apply {
    width: 100% !important;
    display: block;
    margin-bottom: 20px !important;
    font-size: 16px !important;
  }
  .download-chech {
    display: flex !important;
    width: 100% !important;
    flex-wrap: wrap;
    div {
      margin-bottom: 5px !important;
      font-size: 16px;
      &:nth-child(1) {
        width: 60%;
        display: block;
      }
      &:nth-child(2) {
        width: 40%;
        display: block;
      }
      &:nth-child(3) {
        width: 100%;
        display: block;
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
              <h2>Download Home Brochures</h2>
              <p>
                In order to access the full brochures and floor plans for our
                luxury homes, please submit the following information.
              </p>
            </div>
            <form
              name="download"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="download" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name*"
                />
              </div>
              <div className="city-country">
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City*"
                  required
                />

                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country*"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <div>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone*"
                />
              </div>
              <div className="income-currency">
                <input
                  type="text"
                  id="income"
                  name="income"
                  placeholder="Income*"
                  required
                />
                <select>
                  <option value="">Select Currency</option>
                  <option value="usd">USD</option>
                  <option value="euro">EURO</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="language"
                  name="language"
                  placeholder="Primary Language"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="family-size"
                  name="family-size"
                  placeholder="Family Size"
                />
              </div>
              <div className="interested">
                Are you interested in purchasing home primarily to:
              </div>
              <div className="apply">(Select all that apply*)</div>
              <div className="download-chech">
                <div>
                  <input
                    type="checkbox"
                    id="own-hom-live-at-teranga"
                    name="own-hom-live-at-teranga"
                    value="own-hom-live-at-teranga"
                  />
                  <label for="own-hom-live-at-teranga">
                    {" "}
                    Own a home / Live at Teranga Estates
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="invest-in-property"
                    name="invest-in-property"
                    value="invest-in-property"
                  />
                  <label for="invest-in-property"> Invest in property</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="undecided"
                    name="undecided"
                    value="undecided"
                  />
                  <label for="undecided"> Undecided</label>
                </div>
              </div>
              <div className="submit-holder">
                <input
                  type="submit"
                  className="contact-submit"
                  value="Access Brochures"
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
