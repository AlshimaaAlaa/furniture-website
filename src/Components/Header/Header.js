import React, { useState } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };
  return (
    <div className="headerContainer">
      <div
        className="amjad"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h1 style={{ fontSize: "35px" }}>
            أمجاد تعني الفخامة <br />
            والمتانة في كل تفصيلة
            <br /> من كل طقم صالون <br />
            بمهارات مصرية
          </h1>
          <p
            style={{
              color: "#999999",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            في أمجاد، نقدم للمعارض والشركات صالونات كلاسيك ونيو كلاسيك مصممة
            بدقة ومهارة مصرية، بتفاصيل تمثل أعلى معايير دقة وجودة التصنيع
          </p>
        </div>
        <div>
          <img
            src="/assets/images/pic.jpg"
            alt="product"
            className="amjad-product"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #260701",
            borderRadius: "50px",
          }}
          onClick={handlePlayVideo}
          className="amjad-media"
        >
          <img
            src="/assets/images/Play.png"
            alt="play vedio"
            style={{ margin: "0px 5px 0px 5px" }}
          />
          <p
            style={{
              padding: "0px 10px 0px 10px ",
              cursor: "pointer",
            }}
          >
            مشاهدة فيديو تصنيع
          </p>
        </div>
        <div
          className="sallon"
          style={{
            border: "1px solid #260701",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            onClick={() => navigate("/Modren")}
            style={{ padding: "0px 15px 0px 10px", fontWeight: "bolder" }}
            className="navigate-sallons"
          >
            تصفح الصوالين
          </p>
        </div>
        {/*play vedio*/}
        {showVideo && (
          <div
            className="video-container"
            style={{ textAlign: "center", marginTop: "20px" , borderRadius:"10px"}}
          >
            <video width="710" controls autoPlay  style={{borderRadius:"10px" }}>
              <source src="/assets/images/small.mp4" type="video/mp4" />
              المتصفح الخاص بك لا يدعم تشغيل الفيديو.
            </video>
            <button
              onClick={handleCloseVideo}
              style={{
                marginTop: "10px",
                padding: "10px",
                fontSize: "18px",
                borderRadius: "10px",
                cursor: "pointer",
                width:"200px"
              }}
              className="close-vedio"
            >
              إغلاق الفيديو
            </button>
          </div>
        )}
      </div>

      <div className="reasons">
        {/* 1 */}
        <div className="reasons__item">
          <p style={{ fontWeight: "bolder" }}>شحن آمن</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0px 0px 15px 0px",
              padding: "0px 10px 0px 10px",
            }}
          >
            <span style={{ color: "lightgray" }}>توصيل سليم سريع</span>
            <img
              src="/assets/images/Group 6356123.png"
              alt="reasons"
              style={{ margin: "0px 5px 0px 5px" }}
            />
          </div>
        </div>
        {/* 2 */}
        <div className="reasons__item">
          <p style={{ fontWeight: "bolder" }}>افضل تكلفة</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0px 0px 15px 0px",
              padding: "0px 10px 0px 10px",
            }}
          >
            <span style={{ color: "lightgray" }}>اعلى الخامات بأفضل سعر</span>
            <img
              src="/assets/images/Group 6356124.png"
              alt="reasons"
              style={{ margin: "0px 5px 0px 5px" }}
            />
          </div>
        </div>
        {/* 3 */}
        <div className="reasons__item">
          <p style={{ fontWeight: "bolder" }}>سلامة المنتج</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0px 0px 15px 0px",
              padding: "0px 10px 0px 10px",
            }}
          >
            <span style={{ color: "lightgray" }}>التأكد من دقة التصنيع</span>
            <img
              src="/assets/images/Group 6356125.png"
              alt="reasons"
              style={{ margin: "0px 5px 0px 5px" }}
            />
          </div>
        </div>
        {/* 4 */}
        <div className="reasons__item">
          <p style={{ fontWeight: "bolder" }}>مريح</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0px 0px 15px 0px",
              padding: "0px 10px 0px 10px",
            }}
          >
            <span style={{ color: "lightgray" }}>الراحة والاستجمام</span>
            <img
              src="/assets/images/Group 6356122.png"
              alt="reasons"
              style={{ margin: "0px 5px 0px 5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;