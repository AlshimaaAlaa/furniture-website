/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbarContainer">
      <div className="navbar-top" style={{ flexDirection: "" }}>
        <div className="contact-info">
          <div className="email">
            <p>amjadD@gmail.com</p>
            <img src="/assets/images/mail.png" alt="email" />
          </div>
          <div className="phone">
            <p>
              2010005456325 + <br /> 964666556998 +
            </p>
            <img src="/assets/images/call.png" alt="phone" />
          </div>
        </div>
        <div className="social">
          <a href="" target=""><img src="/assets/images/twitter.png" alt="Twitter" /></a>
          <a href="" target=""><img src="/assets/images/linkedin.png" alt="LinkedIn" /></a>
          <a href="" target=""><img src="/assets/images/instegram.png" alt="Instagram" /></a>
          <a href="" target=""><img src="/assets/images/facebook.png" alt="Facebook" /></a>
        </div>
      </div>
      <hr className="hr" />
      <div className="navbar-bottom">
        <img
          className="logo"
          src="/assets/images/Group (2).png"
          alt="logo"
          width="93px"
          height="65px"
        />
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div />
          <div />
          <div />
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>الرئيسية</p>
          </Link>
          <Link to="/WhoWeAre">
            <p>من نحن</p>
          </Link>
          <div className="dropdown">
            <p>
              <img
                src="/assets/images/arrow.png"
                alt="dropdown arrow"
                style={{ margin: "0px 10px 0px 10px" }}
              />
              المعرض
            </p>
            <div
              className="dropdown-options"
              style={{ margin: "10px 0px 0px 0px", zIndex: "2" }}
            >
              <Link to="/classic">
                <p>أثاث كلاسيك</p>
              </Link>
              <Link to="/Modren">
                <p>أثاث نيو كلاسيك</p>
              </Link>
            </div>
          </div>
          <Link to="/ContactUs">
            <p>تواصل معنا</p>
          </Link>
          <Link to="/OurClients">
            <p>عملاؤنا</p>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Navbar;