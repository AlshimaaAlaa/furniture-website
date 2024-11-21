import React, { useState } from "react";
import "./ContactUs.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../../../Common Component/Modal/Modal";
function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const [error , setError] = useState(false);
  const intialValues = {
    name: "",
    email: "",
    phone_number: "",
    message: "",
  };
  const validationShema = Yup.object({
    name: Yup.string().required("يرجي ادخال الأسم"),
    email: Yup.string().required("يرجي ادخال عنوان بريدك الألكتروني"),
    phone_number: Yup.string().required("يرجي ادخال رقم الهاتف"),
    message: Yup.string().required("يرجي ادخال رسالة الدعم هنا"),
  });
  const handleSubmit = async (values) => {
    const items = {
      name: values["name"],
      email: values["email"],
      phone_number: values["phone_number"],
      message: values["message"],
    };
    try {
      const response = await fetch("http://104.248.251.235:8080/support/", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        console.log("success");
        setShowModal(true);
        setError(false);
      } else {
        console.log("failed");
        setError(true);
        setShowModal(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="contactusContainer">
      <div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
          <img
            src="/assets/images/policy.png"
            alt="doc"
            style={{ margin: "0px 5px 0px 5px" }}
          />
          <h2>تواصل معنا</h2>
        </div>
        <p style={{ marginTop: "0px" }}>
          نحن هنا لمساعدتك والإجابة عن أي استفسارات. يمكنك التواصل معنا بسهولة
          من خلال أي من وسائل الاتصال التالية:
        </p>
      </div>
      <div>
        <h3>1. ساعات العمل</h3>
        <div style={{ margin: "0px 10px 0px 10px" }}>
          <span>نحن نرحب بك خلال ساعات العمل الرسمية التالية:</span>
          <br />
          <span>⏰ الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً</span>
          <br />
          <span>⏰ الجمعة - السبت: إجازة</span>
        </div>
      </div>
      <div>
        <h3>2. الهاتف</h3>
        <div style={{ margin: "0px 10px 0px 10px" }}>
          <span>
            يسعدنا استقبال مكالماتك للإجابة عن جميع استفساراتك ومساعدتك في
            طلباتك.
          </span>
          <br />
          <span>📞 رقم الهاتف: [رقم الهاتف]</span>
        </div>
      </div>
      <div>
        <h3>3. البريد الإلكتروني</h3>
        <div style={{ margin: "0px 10px 0px 10px" }}>
          <span>
            إذا كنت تفضل مراسلتنا عبر البريد الإلكتروني، يمكنك إرسال استفساراتك،
            وسنحرص على الرد في أسرع وقت ممكن.
          </span>
          <br />
          <span style={{ margin: "0px 5px 0px 5px" }}>
            ✉️ البريد الإلكتروني: [بريد إلكتروني المصنع]
          </span>
        </div>
      </div>
      <div>
        <h3>4. وسائل التواصل الاجتماعي</h3>
        <div style={{ margin: "0px 10px 0px 10px" }}>
          <span>
            تابعنا على وسائل التواصل الاجتماعي لتكون على اطلاع دائم بآخر عروضنا
            ومنتجاتنا:{" "}
          </span>
          <br />
          <span style={{ margin: "0px 5px 0px 5px" }}>
            .فيسبوك: [رابط صفحة فيسبوك]
          </span>
          <br />
          <span style={{ margin: "0px 5px 0px 5px" }}>
            .إنستغرام: [رابط صفحة إنستغرام]
          </span>
          <br />
          <span style={{ margin: "0px 5px 0px 5px" }}>
            .تويتر: [رابط حساب تويتر]
          </span>
        </div>
      </div>
      {/* location */}
      <div className="location">
        <div>
          <h3>5. الموقع</h3>
          <span>
            ندعوك لزيارة مصنعنا ومعرضنا للتعرف عن قرب على تشكيلتنا الراقية من
            الصالونات
            <br />
            الكلاسيكية
          </span>
          <br />
          <span>
            📍 العنوان:
            <br />
            [عنوان المصنع بالتفصيل]
          </span>
        </div>
        {/* <div>
          <img src="/assets/images/map.png" alt="map" className="map" />
        </div> */}
      </div>
      {/* contact form */}
      <div className="contactForm">
        <div className="form">
          <Formik
            initialValues={intialValues}
            validationSchema={validationShema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <label>الاسم</label>
                <Field placeholder="الاسم*" className="input" name={"name"} />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div>
                <label>البريد الالكتروني</label>
                <Field
                  placeholder="البريد الالكتروني*"
                  className="input"
                  name={"email"}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label>رقم الهاتف</label>
                <Field
                  placeholder="رقم الهاتف*"
                  className="input"
                  name={"phone_number"}
                />
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>الرسالة</label>
                <Field
                  placeholder="اكتب رسالتك هنا"
                  className="message"
                  name="message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  onSubmit={handleSubmit}
                  style={{ fontSize: "16px", cursor: "pointer" }}
                  type="submit"
                >
                  ارسال
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div>
          <h3>
            يمكنك أيضًا ملء نموذج التواصل
            <br />
            المقابل وسنعاود الاتصال بك في أقرب
            <br /> وقت:
          </h3>
          <p>
            نحن متحمسون للتواصل معك ومساعدتك في اختيار الصالون <br />
            المثالي لمنزلك!
          </p>
        </div>
      </div>
      {showModal && (
        <Modal isOpen={showModal}>
          <div style={{ textAlign: "right" }}>
            <button className="close-modal" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <div>
              <img
                src="/assets/images/done.png"
                alt="success"
                width={"120px"}
              />
            </div>
            <h3 style={{ color: "#000" }}> لقد تم ارسال رسالتك بنجاح </h3>
          </div>
        </Modal>
      )}
      {error && (
        <Modal isOpen={error}>
          <div style={{ textAlign: "right" }}>
            <button className="close-modal" onClick={() => setError(false)}>
              X
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <div>
              <img
                src="/assets/images/fail.png"
                alt="success"
                width={"120px"}
              />
            </div>
            <h3 style={{ color: "red" }}> لقد تم ارسال رسالتك بنجاح </h3>
          </div>
        </Modal>
      )}
    </div>
  );
}
export default ContactUs;
