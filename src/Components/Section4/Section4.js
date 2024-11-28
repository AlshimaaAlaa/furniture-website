import React from "react";
import "./Section4.scss";
import { useNavigate } from "react-router-dom";
function Section4() {
  const navigate = useNavigate();
  return (
    <div className="section4Container">
      <div>
        <h2>لماذا تختارنا؟</h2>
        <p style={{ color: "#3C3C3C" }}>
          نقدّم لك صالونات تجمع بين الفخامة والجودة التي تُصمم لتدوم<br/> طويلاً.
          إليك ما يجعل مصنع أمجاد اختيار مناسب لكل معرض أو<br/> شركة تسعى للتميّز
          والارتقاء بتجربة عملائها.
        </p>

        <div style={{ marginTop: "40px" }}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <img
              src="/assets/images/Subtract.png"
              alt="Subtract"
              style={{ margin: "0px 0px 0px 10px" }}
            />

            <span style={{ color: "#909090", marginRight: "" }}>
              أفضل أنواع الخشب لضمان قوة وتحمل تدوم طويلًا{" "}
            </span>
          </div>
        </div>
        <div style={{marginTop:"15px"}}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <img
              src="/assets/images/Subtract.png"
              alt="Subtract"
              style={{ margin: "0px 0px 0px 10px" }}
            />

            <span style={{ color: "#909090", marginRight: "" }}>
              تصاميم كلاسيكية تواكب أحدث اتجاهات التصميم.{" "}
            </span>
          </div>
        </div>
        <div style={{marginTop:"15px"}}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <img
              src="/assets/images/Subtract.png"
              alt="Subtract"
              style={{ margin: "0px 0px 0px 10px" }}
            />

            <span style={{ color: "#909090", marginRight: "" }}>
              إتقان حرفية ومهارة الايدي المصرية تعكس كل تفصيلة في أثاثنا.
            </span>
          </div>
        </div>
        <div style={{marginTop:"15px"}}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <img
              src="/assets/images/Subtract.png"
              alt="Subtract"
              style={{ margin: "0px 0px 0px 10px" }}
            />

            <span style={{ color: "#909090", marginRight: "" }}>
              نلتزم بتقديم أعلى معايير الجودة لنضمن رضا عملائنا.
            </span>
          </div>
        </div>
        <div className="navigate-btn">
          <button style={{cursor:"pointer"}} onClick={()=>navigate('/Modren')}>تصفح الأن</button>
        </div>
      </div>
      <div>
        <img
          src="/assets/images/Frame 48096244.png"
          alt="product"
          className="product"
        />
      </div>
    </div>
  );
}
export default Section4;