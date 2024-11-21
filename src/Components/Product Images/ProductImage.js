import React, { useState, useEffect } from "react";
import "./ProductImage.scss";

function ProductImage() {
  const [productImages, setProductImages] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    async function fetchProductImages() {
      try {
        // Use environment variable for API URL
        const API_URL = process.env.REACT_APP_API_URL || "http://104.248.251.235:8080/products/";

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          // Extract all images into a single array
          const allImages = result.data.flatMap((product) =>
            product.images.map((img) => img.image)
          );
          setProductImages(allImages);
        } else {
          console.error("Failed to fetch product images");
          setError("Failed to fetch product images.");
        }
      } catch (error) {
        console.error("Error fetching product images:", error);
        setError("Error fetching product images. Please try again later.");
      }
    }

    fetchProductImages();
  }, []);

  return (
    <div className="products" style={{ padding: "0px 70px 70px 70px" }}>
      <h1 style={{ textAlign: "center" }}>منتجات اكثر مبيعا</h1>
      <p style={{ textAlign: "center" }}>تصفح مختلف الصوالين الموجودة</p>

      {error ? (
        // Fallback UI if an error occurs
        <div style={{ textAlign: "center", color: "red" }}>
          <p>{error}</p>
        </div>
      ) : (
        <div className="product-image-gallery" style={{ marginTop: "50px" }}>
          {productImages.map((image, index) => (
            <img key={index} src={image} alt="product" />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductImage;
