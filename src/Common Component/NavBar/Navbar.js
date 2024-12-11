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
            <p>
              <a
                href="https://www.amgadfurniture202@gmail.com "
                target="_blank"
                style={{ textDecoration: "none", color: "#000" }}
                rel="noreferrer"
              >
                amgadfurniture202@gmail.com
              </a>
            </p>
            <img src="/assets/images/mail.png" alt="email" />
          </div>
          <div className="phone">
            <p>201559007451 +</p>
            <img src="/assets/images/call.png" alt="phone" />
          </div>
        </div>
        <div className="social">
          <a
            href="https://www.tiktok.com/@amgad_furniture0?_t=8rYes9Pa7w9&_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/3046120.png" alt="TikTok" />
          </a>
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEfoA2V7BXt7QAAAZNkYzrIA16gkG6sUS2OwNhc9g15akqwprij5chNWJNFhZLL_99-LTxfAiGioaxG6nzKm2nkOhCt_N2tmls9aAHBf1bxGaMfQFhQfgSJ8T6YDF6FL2wm3pc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Famgad-furniture-37452433a%2F"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/amgad_furniture202/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/instegram.png" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/people/%D8%A3%D9%85%D9%80%D8%AC%D8%A7%D8%AF/61568220981761/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>
      <hr className="hr" />
      <div className="navbar-bottom">
        <a href="/">
          <img
            className="logo"
            src="/assets/images/Group (2).png"
            alt="logo"
            width="93px"
            height="65px"
          />
        </a>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div />
          <div />
          <div />
        </div>

        <div className={`menu  ${menuOpen ? "open" : ""}`}>
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
