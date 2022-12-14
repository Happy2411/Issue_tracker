import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [loggedin, setLoggedin] = useState(false)

  return (
    <nav className="navbar navbar-expand-md navbar-dark " style={{ backgroundColor: "#490085" }}>
      {/* Container wrapper */}
      <div className="container">
        {/* Navbar brand */}
        <a className="navbar-brand" href="#">
          Issue Tracker
        </a>
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/issueform">
                IssueForm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/track">
                Track
              </NavLink>
            </li>
           
           
            
          </ul>
          {/* Icons */}
          <ul className="navbar-nav d-flex flex-row me-1">
            <li className="nav-item me-3 me-lg-0">
              {loggedin ? (
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setLoggedin(false)
                  }}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => setLoggedin(true)}>
                  <i className="fas fa-sign-in-alt"></i> Login
                </button>
              )}
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-cart" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
          </ul>
          {/* Search */}
          <form className="w-auto">
            <input type="search" className="form-control" placeholder="Type query" aria-label="Search" />
          </form>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  )
}

export default Header