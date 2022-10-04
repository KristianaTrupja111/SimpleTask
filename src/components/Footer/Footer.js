import React from 'react'
import "./Footer.scss";
import logo from "../Asset/phoneIcon.jpeg"
import logo1 from "../Asset/emailIcon.jpeg"
const Footer = () => {
  return (
    <footer>
      <div className="lists">
        <ul className="vivamus">
          <li>
           <span><img src={logo}/></span>+49 (0) 123 456 78 000
          </li>
          <li>Vivamus</li>
          <li>quam</li>
          <li>veneratis</li>
          <li>tincidunt</li>
          <li>fauctibus</li>
        </ul>

        <ul className="elementum">
          <li> <span><img src={logo1}/></span>info@loremipsum.com</li>
          <li>Elementum</li>
          <li>THE LOREM IPSUM<br />REPLY</li>
        </ul>
        <ul className="cookies">
          <li>veneratis</li>
          <li>quam</li>
          <li>Elementum</li>
          <li>THE LOREM IPSUM</li>
        </ul>
      </div>
      <div className="copyright">
        <p>copyright 2021 All rights reserved</p>
        <button>Lorem ipsum dolor sit amet</button>
      </div>
    </footer>
  )
}

export default Footer