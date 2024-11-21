import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <Row sm={1} md={2} lg={4} className="row-items">
        <Col className="text-center">
          <img
            src="/assets/images/Group (1).png"
            alt="logo"
            
            style={{ padding: "", margin: "20px 30px 0px 30px" }}
            className="logo"
          />
          <p className="logo-text">
            امجاد لصالونات دمياط الكلاسيكية: فخامة الماضي وإبداع الحاضر
          </p>
        </Col>

        <Col>
          <h5>روابط مهمة</h5>
          <Link to={"WhoWeAre"}>
            <p style={{ color: "#3F3636" }}>عن امجاد</p>
          </Link>
          <Link to={"Policy"}>
            <p style={{ color: "#3F3636" }}>سياسة الخصوصية</p>
          </Link>
          <Link to={"ContactUs"}>
            <p style={{ color: "#3F3636" }}>تواصل معنا</p>
          </Link>
        </Col>

        <Col>
          <h5>من نحن</h5>
          <p style={{ color: "#909090" }}>
            نحن في امجـــــــــــــاد نفخر بإرث <br />
            طويل من صناعة الصالونات
            <br />
            الكلاسيكية التي تعكس فن
            <br />
            الأويمة الدمياطية.
          </p>
        </Col>

        <Col>
          <h5>سوشيال ميديا</h5>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>TikTok</p>
          <p>LinkedIn</p>
        </Col>

        <Col>
          <h5>تواصل معنا</h5>
          <p>
            <img
              src="/assets/images/whatsapp-svgrepo-com (2).png"
              alt="whatsapp"
            />{" "}
            2015555565 +
          </p>
          <p>
            <img
              src="/assets/images/phone-svgrepo-com.png"
              alt="phone number"
            />{" "}
            956631462144 +
          </p>
          <p>
            <img
              src="/assets/images/phone-svgrepo-com (1).png"
              alt="phone number"
            />{" "}
            956631462144 +
          </p>
          <p>
            <img src="/assets/images/mail-svgrepo-com.png" alt="mail" />{" "}
            amjad@gmail.com
          </p>
        </Col>
      </Row>
      <hr className="hr" />
      <p className="reserved-rights">
        الحقوق محفوظة | 2024 امجـــاد للاثاث الدمياطي الكلاسيكي
      </p>
    </div>
  );
}

export default Footer;
