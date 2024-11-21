import React from "react";
import "./OurClients.scss";

function OurClients() {
  return (
    <div className="ourClientsContainer">
      <div className="ourClientsContainer__item">
        <div>
          <div className="text">
            <img
              src="/assets/images/users-svgrepo-com 1.png"
              alt={"our_clients"}
              style={{ marginTop: "20px" }}
            />
            <h2 className="user" style={{ marginBottom: "10px" }}>
              {"عملاؤنا"}
            </h2>
          </div>
          <p>
            نفخر بخدمتنا لعملاء مميزين من مختلف البلدان، الذين اختاروا أمجاد
            لجودة الصالونات الكلاسيكية والتصاميم الفريدة التي نقدمها. نحن
            ملتزمون بتقديم قطع أثاث
            <br /> تعكس الرقي والفخامة، وتضيف لمسة من الأصالة لكل منزل. <br />
          </p>
        </div>
        <div style={{ marginTop: "50px" }}>
          <h2>{"تجربتنا مع عملائنا في العراق"}</h2>
          <p>
            من خلال شراكتنا المستمرة مع عملائنا في العراق، نجحنا في تلبية
            متطلباتهم الفريدة وتقديم تشكيلة من الصالونات الكلاسيكية التي تعكس
            التراث العربي <br />
            الأصيل. نفتخر بعلاقاتنا الوطيدة معهم، ونتطلع إلى تعزيز هذه الشراكة
            بتقديم مزيد من الجودة والفخامة. <br />
          </p>
        </div>
        <div style={{ marginTop: "70px" }}>
          <h2>{"آراء بعض عملائنا المميزين"}</h2>
          <p className="client-opinion" style={{ padding: "0px 20px" }}>
            كان اختيار أمجاد خيارًا مثاليًا. الصالونات رائعة وتعكس حرفية عالية،
            وجودة الخامات ممتازة." <br />
            <span>{"— أحمد، العراق"}</span>
          </p>
          <p className="client-opinion" style={{ padding: "0px 20px" }}>
            {
              "خدمة ممتازة وسرعة في التوصيل. تصميم الصالون أضاف لمسة راقية إلى منزلنا."
            }
            <br />
            <span>{"— مريم، مصر"}</span>
          </p>
          <p className="client-opinion" style={{ padding: "0px 20px" }}>
            {
              "أثاث مميز وخامات فائقة الجودة. أشكركم على اهتمامكم بأدق التفاصيل."
            }
            <br />
            <span>{"— سارة، السعودية"}</span>
          </p>
        </div>
      </div>
      {/* Why Clients Choose Us Section */}
      <div className="whyClientsChooseUs">
        <h1>{"لماذا يختارنا عملاؤنا؟"}</h1>
        <p>
          "نحن نمزج بين الحرفية التقليدية والإبداع الحديث لنقدم لك أفضل تصاميم
          الصالونات. نستخدم أجود أنواع الأخشاب والمواد الفاخرة التي تضمن لك
          تجربة فريدة
          <br /> ومظهرًا أنيقًا يدوم طويلًا." <br />
        </p>

        <div style={{ marginTop: "50px" }}>
          <div className="whyClientsChooseUs__item">
            <img src="/assets/images/Subtract.png" alt="Subtract" />
            <p style={{ fontWeight: "bolder" }}>
              {"تصاميم كلاسيكية فريدة "}
              <span style={{ color: "#909090", marginRight: "5px" }}>
                {" تعكس الأصالة والجمال."}
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="whyClientsChooseUs__item">
            <img src="/assets/images/Subtract.png" alt="Subtract" />
            <p style={{ fontWeight: "bolder" }}>
              جودة عالية في الخامات{" "}
              <span style={{ color: "#909090", marginRight: "5px" }}>
                تضمن متانة واستمرارية للأثاث.{" "}
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="whyClientsChooseUs__item">
            <img src="/assets/images/Subtract.png" alt="Subtract" />
            <p style={{ fontWeight: "bolder" }}>
              {"حرفية التصنيع"}
              <span style={{ color: "#909090", marginRight: "5px" }}>
                {"التي تميز كل قطعة وتضفي عليها طابعًا ملكيًا."}
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="whyClientsChooseUs__item">
            <img src="/assets/images/Subtract.png" alt="Subtract" />
            <p style={{ fontWeight: "bolder" }}>
              {"خدمة عملاء مميزة"}
              <span style={{ color: "#909090", marginRight: "5px" }}>
                {"تلبي كافة احتياجات العملاء وتحرص على رضاهم."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
