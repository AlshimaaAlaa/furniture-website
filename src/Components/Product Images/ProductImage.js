import React, { useState, useEffect } from "react";
import "./ProductImage.scss";

function ProductImage() {
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchProductImages() {
      setLoading(true);
      try {
        const response = await fetch("http://104.248.251.235:8080/products/?best_seller=true", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        const result = await response.json();
        if (response.ok) {
          setLoading(false);
          // Extract all images into a single array
          const allImages = result.data.flatMap((product) =>
            product.images.map((img) => img.image)
          );
          setProductImages(allImages);
        } else {
          setLoading(false);
          setError(error);
          console.error("Failed to fetch product images");
        }
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error("Error fetching product images:", error);
      }
    }
    fetchProductImages();
  }, [error]);

  return (
    <div className="products" style={{ padding: "0px 70px 70px 70px" }}>
      {error ? (
        <p
          className="text-danger"
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "Amiri",
          }}
        >
          حدث خطأ أثناء تحميل البيانات
        </p>
      ) : loading ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "Amiri",
          }}
        >
          جاري تحميل البيانات....
        </p>
      ) : productImages.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "Amiri",
          }}
        >
          لا يوجد منتجات لعرضها في الوقت الحالي
        </p>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>منتجات اكثر مبيعا</h1>
          <p style={{ textAlign: "center" }}>تصفح مختلف الصوالين الموجودة</p>
          <div className="product-image-gallery" style={{ marginTop: "50px" }}>
            {productImages.map((image, index) => (
              <img key={index} src={image} alt="product-image" />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default ProductImage;