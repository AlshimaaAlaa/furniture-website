import React, { useEffect, useState } from "react";
import "./CategoryDetails.scss";
import { useParams } from "react-router-dom";

function CategoryDetails() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    async function getProductDetails() {
      try {
        const response = await fetch(
          `http://104.248.251.235:8080/products/${id}/`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );
        const result = await response.json();
        if (response.ok) {
          console.log("Success", result);
          setProductDetail(result.data);
          // Set the first image as the default main image
          if (result.data.images && result.data.images.length > 0) {
            setMainImage(result.data.images[0].image);
          }
        } else {
          console.error("Failed to fetch product details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getProductDetails();
  }, [id]);

  if (!productDetail) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginTop: "100px",
          fontFamily: "Dancing Script",
        }}
      >
        Loading...
      </p>
    );
  }

  return (
    <div className="category-details">
      <div className="image-section">
        <div className="main-image">
          <img src={mainImage} alt="Main Product" />
        </div>

        <div className="thumbnails">
          {productDetail.images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(image.image)}
              className={mainImage === image.image ? "active" : ""}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="product-details">
          <h1 style={{}}>{productDetail.name}</h1>
          <p style={{ textAlign: "left", fontWeight: "bolder" }}>
            {productDetail.price} جنية
          </p>
          <p>{productDetail.description}</p>
        </div>

        <div
          className="product-category"
          style={{
            backgroundColor: "#F5F5DC",
            fontWeight: "bolder",
            borderRadius: "50px",
            border: "1px solid lightgray",
            height: "45px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/images/cat.png"
            alt="cat"
            width={"20px"}
            style={{ margin: "0px 10px 0px 10px" }}
          />
          <p style={{ padding: "0px", textAlign: "center" }}>
            {productDetail.category.name}
          </p>
        </div>

        <div className="product-specifications">
          <h3 style={{ marginTop: "30px" }}>المواصفات</h3>
          <ul>
            <li>اللون : {productDetail.color || "لايوجد لون لهذا المنتج"}</li>
            <li>الطول_سم : {productDetail.length_cm || "لايوجد"}</li>
            <li>العرض_سم : {productDetail.width_cm || "لايوجد"}</li>
            <li>الارتفاع_سم : {productDetail.height_cm || "لا يوجد"}</li>
            <li>العمق_سم : {productDetail.depth_cm || "لايوجد"}</li>
            <li>المخزون : {productDetail.stock || "لايوجد"}</li>
            <li>بلد_المنشأ : {productDetail.country_of_origin || " لايوجد"}</li>
            <li>
              {productDetail.materials.map((material) => (
                <div>
                  <p style={{ margin: "0px 0px 0px 10px" }}>
                    {material.name}
                    <span style={{ margin: "0px 10px 0px 10px" }}>|</span>
                    <span>{material.description}</span>
                  </p>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetails;
