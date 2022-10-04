import React from 'react'
import "./MainBody.scss";
import logo from "../Asset/LocationIcon.jpeg"
const MainBody = () => {
  return (
    <main>
    <h2 className="title">
      Lorem ipsum color sit amet <br />
      consectuer adipiscing
    </h2>
    <div className="inputs">
      <div className="input-fields">
        <div className="search-container">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="30"
            viewBox="0 0 32 32"
          >
            <path
              d="M13.455 2.182c6.226 0 11.273 5.047 11.273 11.273 0 2.851-1.058 5.454-2.803 7.439l7.483 7.485-1.029 1.029-7.485-7.483c-1.985 1.745-4.588 2.803-7.439 2.803-6.226 0-11.273-5.047-11.273-11.273s5.047-11.273 11.273-11.273zM13.455 3.636c-5.422 0-9.818 4.396-9.818 9.818s4.396 9.818 9.818 9.818c5.422 0 9.818-4.396 9.818-9.818s-4.396-9.818-9.818-9.818z"
            ></path>
          </svg>
          <label for="search">Lorem ipsum</label>
          <input type="text" id="search" />



        </div>
        <div className="location-container">
        <img src={logo} className='svg'/>
          <label for="location">Lorem ipsum dolor</label>
          <input type="text" id="location" />
        </div>
      </div>
      <button className="submit-button" type="submit">Lorem ipsum</button>
    </div>

    <div className="button-wrapper">
      <h4>Lorem ipsum dolor sit amet</h4>
      <div className="buttons">
        <button className="btn">Lorem ipsum</button>
        <button className="btn">Lorem ipsum dolor sit amet</button>
        <button className="btn">consectuer adipiscing</button>
        <button className="btn">Lorem ipsum</button>
      </div>
    </div>
  </main>
  )
}

export default MainBody