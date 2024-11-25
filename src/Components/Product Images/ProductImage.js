import React, { useState, useEffect } from "react";
import "./ProductImage.scss";

function ProductImage() {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    async function fetchProductImages() {
      try {
        const response = await fetch("http://104.248.251.235:8080/products/", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        const result = await response.json();
        if (response.ok) {
          // Extract all images into a single array
          const allImages = result.data.flatMap((product) =>
            product.images.map((img) => img.image)
          );
          setProductImages(allImages);
        } else {
          console.error("Failed to fetch product images");
        }
      } catch (error) {
        console.error("Error fetching product images:", error);
      }
    }
    fetchProductImages();
  }, []);

  return (
    <div className="products" style={{ padding: "0px 70px 70px 70px" }}>
      <h1 style={{ textAlign: "center" }}>منتجات اكثر مبيعا</h1>
      <p style={{ textAlign: "center" }}>تصفح مختلف الصوالين الموجودة</p>
      <div className="product-image-gallery" style={{ marginTop: "50px" }}>
        {productImages.map((image, index) => (
          <img key={index} src={image} alt="product-image" />
        ))}
      </div>
    </div>
  );
}
export default ProductImage;