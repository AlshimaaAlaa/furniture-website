import React from "react";
import "./AboutFactory.scss";
function AboutFactory() {
  return (
    <div className="aboutFactoryContainer">
      <div>
        <h2>"حول مصنعنا"</h2>
        <p>
          "نحن في امجـــــــــــــاد نفخر بإرث طويل من صناعة الصالونات
          <br />
          الكلاسيكية التي تعكس فن الأويمة الدمياطية. كل قطعة
          <br /> أثاث تمثل تفاصيل دقيقة وأيدي حرفية ماهرة، ونسعى دائمًا
          <br /> لتحقيق أعلى معايير الجودة والتميز."
        </p>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              margin: "20px 15px 0px 15px",
            }}
          >
            <img
              src="/assets/images/about factory.png"
              alt="about factory"
              width={"30px"}
              height={"30px"}
            />
          </div>
          <div>
            <h3>خبرة المصنع في صناعة الصالونات الكلاسيكية.</h3>
            <p style={{ fontWeight: "lighter" }}>
              "نحن نمتلك إرثًا طويلًا في فن صناعة الصالونات الكلاسيكية
              <br />
              الدمياطية، مما يضمن لك تصميمات تجمع بين الأصالة والتفرد."
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              margin: "20px 15px 0px 15px",
            }}
          >
            <img
              src="/assets/images/about factory(1).png"
              alt="about factory"
              width={"30px"}
              height={"30px"}
            />
          </div>
          <div>
            <h3>التفاني في استخدام أجود أنواع الخشب والمواد.</h3>
            <p style={{ fontWeight: "lighter" }}>
              "نعتمد في تصنيع كل قطعة على أجود أنواع الأخشاب
              <br /> الطبيعية والمواد الفاخرة لضمان المتانة والجودة العالية."
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              margin: "20px 15px 0px 15px",
            }}
          >
            <img
              src="/assets/images/about factory(2).png"
              alt="about factory"
              width={"30px"}
              height={"30px"}
            />
          </div>
          <div>
            <h3>الحرفية التي تميز كل قطعة.</h3>
            <p style={{ fontWeight: "lighter" }}>
              "تتميز كل قطعة أثاث بتفاصيل دقيقة وزخارف يدوية تعكس
              <br /> براعة الحرفيين الدمياطيين الذين يضعون قلوبهم في كل تصميم."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutFactory;