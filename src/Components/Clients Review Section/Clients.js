import React from "react";
import "./Clients.scss";
function Clients() {
  return (
    <div className="clientsContainer">
      <div>
        <h1 style={{ textAlign: "center" }}>عملاؤنا</h1>
        <h4 style={{ textAlign: "center" }}>
          "فخورون بخدمة عملائنا حول العالم"
        </h4>
        <p
          style={{
            color: "#909090",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          "من بين عملائنا الدوليين، نفخر بتعاوننا المثمر مع دولة العراق، حيث
          قدمنا مجموعة من
          <br /> الصالونات الكلاسيكية الفاخرة التي لاقت استحسانًا كبيرًا. نسعى
          دائمًا لتلبية احتياجات <br />
          عملائنا وتقديم قطع فريدة تعكس الذوق الرفيع والجودة الفائقة."
        </p>
      </div>
      {/* clients review */}
      <div className="clients-review">
        <div className="div">
          <div style={{ textAlign: "left" }}>
            <img
              src="/assets/images/comment-alt-lines-svgrepo-com 1.png"
              alt="message"
              className="review"
            />
          </div>
          <p style={{ color: "#2B2B2B" }}>
            "الجودة والفخامة التي تقدمها هذه الشركة لا مثيل لها. كل صالون يتميز
            بالذوق الرفيع والتصميم الذي يضيف لمسة من الأناقة إلى منزلي."
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="/assets/images/Frame 1013.png"
              alt="review"
              height={"20px"}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: "0px 0px 0px 5px" }}>- نورا محمد، القاهرة</p>
              <img
                src="/assets/images/Mask group (1).png"
                alt="client"
                width={"40px"}
              />
            </div>
          </div>
        </div>
        <div className="div">
          <div style={{ textAlign: "left" }}>
            <img
              src="/assets/images/comment-alt-lines-svgrepo-com 1.png"
              alt="message"
              className="review"
            />
          </div>
          <p style={{ color: "#2B2B2B" }}>
            "صالونات امجاد تجاوزت كل توقعاتي. التفاصيل الدقيقة والحرفية العالية
            تجعل كل قطعة فريدة من نوعها. أشعر بالفخر لامتلاك هذا الأثاث الراقي
            في منزلي."
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="/assets/images/Frame 1013.png"
              alt="review"
              height={"20px"}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: "0px 0px 0px 5px" }}>- أحمد حسين، بغداد</p>
              <img
                src="/assets/images/Mask group.png"
                alt="client"
                width={"40px"}
              />
            </div>
          </div>
        </div>
        <div className="div">
          <div style={{ textAlign: "left" }}>
            <img
              src="/assets/images/comment-alt-lines-svgrepo-com 1.png"
              alt="message"
              className="review"
            />
          </div>
          <p>
            "أنا معجب جدًا بالصالونات الكلاسيكية التي طلبتها. الأثاث ليس فقط
            جميلًا ولكنه أيضًا مريح ومتقن الصنع. سأوصي بالتأكيد بكل من أعرفهم."
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="/assets/images/Frame 1013.png"
              alt="review"
              height={"20px"}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: "0px 0px 0px 5px" }}>مريم خالد، دبي</p>
              <img
                src="/assets/images/Mask group (2).png"
                alt="client"
                width={"36px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Clients;