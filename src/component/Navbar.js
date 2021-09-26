import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  let myStyletext = {
      color: props.mode == 'dark'?'white':'black',
      opacity: props.mode == 'dark'?'0.5': '1',
  }

//   let myStylecolor = {
//     color: props.setthemeMode == 'danger'?'white':'black',
//     //opacity: props.mode == 'dark'?'0.5': '1',
// }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> 
                  {props.aboutText}
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className={`form-check form-switch common-hide text-text-${props.thememode==='light'?'danger':'light'}`} >
              <input className="form-check-input" type="checkbox"  onClick={props.toggleThemeDanger} id="flexSwitchCheckDefault" disabled={props.mode === "dark"} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={myStyletext}>Enable Red theme</label>
            </div>
            <div className={`form-check form-switch  mx-3 common-hide  text-text-text-${props.thememode==='light'?'success':'light'}`} >
              <input className="form-check-input" type="checkbox"  onClick={props.toggleThemeGreen} id="flexSwitchCheckDefault" disabled={props.mode === "dark"}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={myStyletext} >Enable Green theme</label>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
              <input className="form-check-input" type="checkbox"  onClick={props.toggleModeBtn} id="flexSwitchCheckDefault" disabled={props.setthemeMode === "danger" ||  props.setthemeMode==="success"}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={myStyletext}>Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { 
    title: PropTypes.string,   
    aboutText: PropTypes.string 
}

// Navbar.defaultProps = {
//     title: "I am defult props 1",
//     aboutText: "I am about text 1"
// }
