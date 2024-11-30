import React, { useState } from "react";
import "./GetTouch.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../../Common Component/Modal/Modal";
function GetTouch() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
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
    setLoading(true);
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
        setLoading(false);
        console.log("success");
        setShowModal(true);
        setError(false);
      } else {
        setLoading(false);
        console.log("failed");
        setError(true);
        setShowModal(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <div className="GetTouchContainer">
      <div className="GetTouchContainer__item">
        <div className="">
          <h1 style={{ fontSize: "40px" }}>تواصل معنا</h1>
          <h3 style={{ fontSize: "32px" }}>
            "لمعرفة المزيد عن منتجاتنا أو لتقديم
            <br />
            طلب خاص، يمكنك التواصل معنا عبر
            <br />
            الهاتف أو البريد الإلكتروني."
          </h3>
        </div>
        <div className="form">
          <Formik
            initialValues={intialValues}
            onSubmit={handleSubmit}
            validationSchema={validationShema}
          >
            <Form>
              <div>
                <label>الاسم</label>
                <Field placeholder="الاسم*" className="input" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div>
                <label>البريد الالكتروني</label>
                <Field
                  placeholder="البريد الالكتروني*"
                  className="input"
                  name="email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label>رقم الهاتف</label>
                <Field
                  placeholder="رقم الهاتف*"
                  className="input"
                  name="phone_number"
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
                  style={{ cursor: "pointer", fontSize: "16px" }}
                  type="submit"
                >
                  {loading ? "جاري التحميل...." : "ارسال"}
                </button>
              </div>
            </Form>
          </Formik>
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
                src="/assets/images/success-achievement-award-medal-winner-svgrepo-com 1.png"
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
            <h3 style={{ color: "red" }}>
              حدث خطأ أثناء ارسال رسالتك حاول مرةأخري
            </h3>
          </div>
        </Modal>
      )}
    </div>
  );
}
export default GetTouch;
