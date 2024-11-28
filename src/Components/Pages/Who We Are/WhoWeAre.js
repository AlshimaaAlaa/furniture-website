import React from "react";
import "./WhoWeAre.css";
import { Row, Col } from "react-bootstrap";
function WhoWeAre() {
  return (
    <div className="whoweareContainer">
      <div className="whoweareOutline">
        <div className="whoweareOutline__text">
          <img
            src="/assets/images/Group (3).png"
            alt="logo"
            width={"180px"}
            height={"130px"}
          />

          <h2 className="" style={{ color: "#fff", textAlign: "center" }}>
            "صالونات دمياط الكلاسيكية:
            <br /> فخامة الماضي وإبداع الحاضر"
          </h2>
        </div>
      </div>
      <div
        className="whoweareContainer__item"
        style={{ padding: "", marginTop: "80px" }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/assets/images/search-globe-svgrepo-com.png"
              alt="who we are"
              width={"25px"}
              height={"25px"}
              style={{ margin: "10px 0px 0px 5px" }}
            />
            <h2>من نحن</h2>
          </div>
          <p
            style={{
              color: "#2B2B2B",
              fontSize: "15px",
              margin: "0px 30px 0px 0px",
            }}
          >
            أمجاد، مصنع متخصص في تصميم وتصنيع الأثاث الفاخر والمتميز في مصر،
            بخبرة تمتد لسنوات، نفتخر بتقديم صالونات تجمع بين الفخامة والمتانة،
            مع
            <br />
            استخدام أفضل الخامات لتوفير أثاث يدوم طويلاً.
            <br /> نحن ملتزمون بتقديم تصاميم مبتكرة تواكب أحدث الاتجاهات
            العالمية في الأثاث الكلاسيكي والنيو كلاسيك لتلبية احتياجات الأسواق
            المحلية والدولية، مما
            <br /> يجعل منتجاتنا الخيار الأنسب للمعارض والشركات التي تبحث عن
            التميز والجودة العالية
          </p>
        </div>

        <div style={{ marginTop: "30px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/assets/images/eye-svgrepo-com.png"
              alt="who we are"
              width={"25px"}
              height={"25px"}
              style={{ margin: "10px 0px 0px 5px" }}
            />
            <h2>رؤيتنا:</h2>
          </div>
          <p
            style={{
              color: "#2B2B2B",
              fontSize: "15px",
              margin: "0px 30px 0px 0px",
            }}
          >
            نسعى في أمجاد لأن نكون الرواد في صناعة الأثاث من خلال تقديم تصاميم
            كلاسيكية متميزة، وكوننا الخيار الأول للمؤسسات والشركات التي تبحث عن
            التميز <br />
            الدائم، مع تقديم منتجات تواكب أحدث الاتجاهات العالمية وتعكس الحرفية
            المصرية الأصيلة.
          </p>
        </div>

        <div style={{ marginTop: "30px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/assets/images/message-circle-chat-svgrepo-com.png"
              alt="who we are"
              width={"25px"}
              height={"25px"}
              style={{ margin: "10px 0px 0px 5px" }}
            />
            <h2>رسالتنا: </h2>
          </div>
          <p
            style={{
              color: "#2B2B2B",
              fontSize: "15px",
              margin: "0px 30px 0px 0px",
            }}
          >
            نقدم تصاميم كلاسيكية عالية الجودة تلبي احتياجات الأسواق المحلية
            والدولية، مع الحفاظ على المهارات المصرية الأصيلة، باستخدام أفضل
            الخامات وتقنيات
            <br />
            التصنيع الحديثة لضمان المتانة و تناسب كافة الأذواق.
          </p>
        </div>
        <div style={{ marginTop: "30px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/assets/images/question-circle-svgrepo-com.png"
              alt="who are you"
              width={"25px"}
              height={"25px"}
              style={{ margin: "10px 0px 0px 5px" }}
            />
            <h2>لماذا أمجـــــــــاد؟</h2>
          </div>
        </div>
        {/* why amgad */}
        <Row>
          <Col style={{ marginTop: "50px" }} className="">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <img
                  src="/assets/images/Group 6356152.png"
                  alt="item number"
                  width={"90px"}
                  height={"90px"}
                  className="num"
                  style={{ margin: "0px 10px 0px 10px" }}
                />
              </div>
              <div
                style={{
                  color: "lightgray",
                  fontWeight: "bolder",
                  margin: "0px 10px 0px 10px",
                }}
                className="dotted"
              >
                -------------------------------------------------
              </div>
              <div style={{ display: "flex" }} className="item1">
                <div style={{ paddingRight: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/assets/images/Group 6356143.png" alt="" />
                    <h2 style={{ marginRight: "10px" }}>
                      أعلى معايير <br />
                      الجودة:
                    </h2>
                  </div>
                  <p
                    style={{
                      width: "280px",
                      margin: "-12px 30px 0px 0px",
                      color: "#2B2B2B",
                    }}
                  >
                    تطبيق معايير جودة عالية في كل
                    <br />
                    مرحلة من مراحل الإنتاج، لضمان
                    <br />
                    تقديم منتجات متميزة تلبي توقعات واحتياجات عملائنا بشكل دائم
                  </p>
                </div>
                {/* <div> */}
                  <img
                    src="/assets/images/Image Product (1).png"
                    alt="product"
                    width={"220px"}
                    height={"190px"}
                    style={{ borderRadius: "10px" }}
                    className="product-image"
                  />
                {/* </div> */}
              </div>
            </div>
          </Col>
          <Col style={{ marginTop: "50px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "",
              }}
            >
              <div style={{ display: "flex" }} className="item1">
                {/* <div> */}
                  <img
                    src="/assets/images/Image Product.png"
                    alt="product"
                    width={"220px"}
                    height={"190px"}
                    className="product-image"
                    style={{ borderRadius: "10px" }}
                  />
                {/* </div> */}
                <div style={{ paddingRight: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/assets/images/thumbs-up-svgrepo-com.png"
                      alt=""
                    />
                    <h2 style={{ marginRight: "10px" }}>
                      حرفية ومهارة
                      <br />
                      مصرية:
                    </h2>
                  </div>
                  <p
                    style={{
                      width: "280px",
                      margin: "-12px 30px 0px 0px",
                      color: "#2B2B2B",
                    }}
                  >
                    كل قطعة أثاث من أمجاد تُصنع باستخدام تقنيات وحرفية مصرية
                    متميزة، حيث يحرص فريقنا على الاهتمام بأدق التفاصيل لضمان
                    جودة عالية
                  </p>
                </div>
              </div>
              <div
                style={{
                  color: "lightgray",
                  fontWeight: "bolder",
                  margin: "0px 10px 0px 10px",
                }}
                className="dotted"
              >
                -------------------------------------------------
              </div>
              <div>
                <img
                  src="/assets/images/Group 6356153.png"
                  alt="item number"
                  width={"90px"}
                  height={"90px"}
                  className="num"
                  style={{ margin: "0px 10px 0px 10px" }}
                />
              </div>
            </div>
          </Col>
          <Col style={{ marginTop: "50px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "",
              }}
            >
              <div>
                <img
                  src="/assets/images/Group 6356156.png"
                  alt="item number"
                  width={"90px"}
                  height={"90px"}
                  className="num"
                  style={{ margin: "0px 10px 0px 10px" }}
                />
              </div>
              <div
                style={{
                  color: "lightgray",
                  fontWeight: "bolder",
                  margin: "0px 10px 0px 10px",
                }}
                className="dotted"
              >
                -------------------------------------------------
              </div>
              <div style={{ display: "flex" }} className="item1">
                <div style={{ paddingRight: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/assets/images/Group 6356141.png" alt="" />
                    <h2 style={{ marginRight: "10px" }}>
                      تصاميم كلاسيكية
                      <br /> مخصصة:
                    </h2>
                  </div>
                  <p style={{ width: "280px", margin: "-12px 30px 0px 0px" }}>
                    تصاميم كلاسيكية مختلفة تم تصميمها بعناية لتناسب ذوقك الخاص،
                    مع إمكانية تخصيص كل قطعة لتلبي احتياجاتك و تفضيلاتك الشخصية
                  </p>
                </div>
                {/* <div> */}
                  <img
                    src="/assets/images/Image Product (2).png"
                    alt="product"
                    width={"220px"}
                    height={"190px"}
                    className="product-image"
                    style={{ borderRadius: "10px" }}
                  />
                {/* </div> */}
              </div>
            </div>
          </Col>
          <Col style={{ marginTop: "50px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "",
              }}
            >
              <div style={{ display: "flex" }} className="item1">
                {/* <div> */}
                  <img
                    src="/assets/images/Image Product (3).png"
                    alt="product"
                    width={"220px"}
                    height={"190px"}
                    className="product-image"
                    style={{ borderRadius: "10px" }}
                  />
                {/* </div> */}
                <div style={{ paddingRight: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/assets/images/Group 6356142.png" alt="" />
                    <h2 style={{ marginRight: "10px" }}>علاقات دولية: </h2>
                  </div>
                  <p style={{ width: "280px", margin: "-12px 30px 0px 0px" }}>
                    منذ تأسيسنا، حرصنا على بناء علاقات قوية مع عملائنا وتقديم
                    تجربة متكاملة، حيث نؤمن بأن أثاثنا يرتقي بمستوى الراحة في
                    منزلك.
                  </p>
                </div>
              </div>
              <div
                style={{
                  color: "lightgray",
                  fontWeight: "bolder",
                  margin: "0px 10px 0px 10px",
                }}
                className="dotted"
              >
                -------------------------------------------------
              </div>
              <div>
                <img
                  src="/assets/images/Group 6356157.png"
                  alt="item number"
                  width={"90px"}
                  height={"90px"}
                  className="num"
                  style={{ margin: "0px 10px 0px 10px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        {/* vedios */}
        {/* <div>
          <div
            style={{ marginTop: "50px", display: "flex", alignItems: "center" }}
          >
            <img
              src="/assets/images/Group 6356162.png"
              alt="vedios"
              style={{ marginTop: "5px" }}
              width={"30px"}
              height={"30px"}
            />
            <h1 style={{ marginRight: "10px" }}>فيديوهات</h1>
          </div>
          <div
            className="vedios"
            style={{ textAlign: "center", margin: "30px 0px 50px 0px" }}
          >
            <img src="/assets/images/Component 6.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default WhoWeAre;
