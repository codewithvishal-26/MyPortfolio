import React, { Component, createRef } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuCheckboxRef = createRef();
  }

  closeMobileMenu = () => {
    if (this.menuCheckboxRef.current) {
      this.menuCheckboxRef.current.checked = false;
    }
  };

  render() {
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <div style={{ position: "relative", zIndex: 1000 }}>
        <Fade top duration={1000} distance="20px">
          <SeoHeader />
          <div>
            <header className="header">
              <NavLink to={link} tag={Link} className="logo">
                <span className="logo-icon">&lt;/&gt;</span>
                <span className="logo-name">
                  <span className="logo-first">Test</span>
                  <span className="logo-second"> • Build • Deploy</span>
                </span>
              </NavLink>
              <input
                className="menu-btn"
                type="checkbox"
                id="menu-btn"
                ref={this.menuCheckboxRef}
              />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
              <ul className="menu">
                <li>
                  <NavLink
                    to="/home"
                    tag={Link}
                    activeClassName="active-link"
                    onClick={this.closeMobileMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/education"
                    tag={Link}
                    activeClassName="active-link"
                    onClick={this.closeMobileMenu}
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/experience"
                    tag={Link}
                    activeClassName="active-link"
                    onClick={this.closeMobileMenu}
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    tag={Link}
                    activeClassName="active-link"
                    onClick={this.closeMobileMenu}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/opensource"
                    tag={Link}
                    activeClassName="active-link"
                    onClick={this.closeMobileMenu}
                  >
                    Open Source
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    tag={Link}
                    activeClassName="active-link"
                    onClick={this.closeMobileMenu}
                  >
                    Contact Me
                  </NavLink>
                </li>
              </ul>
              <div className="header-right">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social-btn"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social-btn"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="mailto:your@email.com"
                  className="header-social-btn"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <NavLink to="/contact" tag={Link} className="header-cta-btn">
                  Let's Connect
                </NavLink>
              </div>
            </header>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Header;
