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
          <p style={{display:"flex" , alignItems:"center"}}>
            <img src="/assets/images/facebook.png" alt="facebook" width={'16px'} style={{margin:"0px 0px 0px 10px"}}/>
            <a
              href="https://www.facebook.com/profile.php?id=61568220981761&mibextid=ZbWKwL"
              target="_blank" rel="noreferrer"
            >
              Facebook
            </a>
          </p>
          <p style={{display:"flex" ,alignItems:"center"}}>
            <img src="/assets/images/instegram.png" alt="instegram" width={'16px'} style={{margin:"0px 0px 0px 10px"}}/>
            <a
              href="https://www.instagram.com/amgad_furniture202?igsh=NTFscXZlZmpiMm82"
              target="_blank" rel="noreferrer"
            >
              Instagram
            </a>
          </p>
          <p style={{display:"flex" ,alignItems:"center"}}>
            <img src="/assets/images/3046120.png" alt="tiktok" width={'16px'} style={{margin:"0px 0px 0px 10px"}}/>
            <a
              href="https://www.tiktok.com/@amgad_furniture0?_t=8rYes9Pa7w9&_r=1"
              target="_blank" rel="noreferrer"
            >
              TikTok
            </a>
          </p>
          <p style={{display:"flex" ,alignItems:"center"}}>
            <img src="/assets/images/linkedin.png" alt="linkedin" width={'16px'} style={{margin:'0px 0px 0px 10px'}}/>
            <a
              href="https://www.linkedin.com/in/amgad-furniture-37452433a/"
              target="_blank" rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </Col>

        <Col>
          <h5>تواصل معنا</h5>
          <p>
            <img
              src="/assets/images/whatsapp-svgrepo-com (2).png"
              alt="whatsapp"
              style={{margin:"3px 0px 0px 10px"}}
            />
            201559007451 +
          </p>
          <p>
            <img
              src="/assets/images/phone-svgrepo-com.png"
              alt="phone number"
              style={{margin:"3px 0px 0px 10px"}}
            />
            201559007451 +
          </p>
          <p>
            <img src="/assets/images/mail-svgrepo-com.png" alt="mail"   style={{margin:"2px 0px -2px 10px"}}/>
            <a href="https://www.amgadfurniture202@gmail.com" target="blank" style={{color:"#000" , textDecoration:"none" , fontWeight:"bolder"}}>amgadfurniture202@gmail.com</a>
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