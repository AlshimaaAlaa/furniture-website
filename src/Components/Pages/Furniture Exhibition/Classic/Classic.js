/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Classic.scss";
import { useNavigate } from "react-router-dom";

function Classic() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "http://104.248.251.235:8080/products/",
          {
            headers: {
              accept: "application/json",
            },
          }
        );
  
        if (response.data.status === "success") {
          console.log("success modren");
          // Filter products with a valid category and name "Modern"
          const modernProducts = response.data.data.filter(
            (product) => product.category && product.category.name === "كلاسيك"  || "classic"
          );
          setProducts(modernProducts);
          setSortedProducts(modernProducts); 
        } else {
          setError("Failed to fetch products.");
        }
      } catch (err) {
        setError("Error fetching data.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
  
    fetchProducts();
  }, []);
  
  useEffect(() => {
    // Sort products
    let sorted = [...products];
    if (sortOption === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  }, [sortOption, products]);

  if (loading)
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginTop: "100px",
          fontFamily: "Dancing Script",
        }}
      >
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginTop: "100px",
          color: "red",
          fontFamily: "Dancing Script",
        }}
      >
        {error}
      </div>
    );

  return (
    <div className="classic">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/assets/images/gallery-round-svgrepo-com 1.png"
          alt="classic"
        />
        <p style={{ fontWeight: "bolder", margin: "0px 10px 0px 10px" }}>
          المعرض
          <span style={{ color: "lightgray", margin: "0px 5px 0px 5px" }}>
            / أثاث كلاسيك
          </span>
        </p>
      </div>

      {/* Price Filter */}
      <div className="filterContainer">
        <label
          htmlFor="sort"
          style={{ margin: "10px", fontWeight: "bold", display: "inline" }}
        >
          ترتيب حسب :
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{
            padding: "5px 20px 5px 20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <option value="none">اختر</option>
          <option value="low-to-high">السعر من الأقل إلى الأعلى</option>
          <option value="high-to-low">السعر من الأعلى إلى الأقل</option>
        </select>
      </div>
      <div className="products">
        <ul className="product-list">
          {sortedProducts.map((product) => (
            <li
              key={product.id}
              className="product-item"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/Classic/${product.id}`)}
            >
              <div className="product-images">
                {product.images.length > 0 ? (
                  product.images.map((image) => (
                    <img
                      key={image.id}
                      src={image.image}
                      alt={`Product${product.name}image`}
                      style={{ width: "150px", margin: "5px" }}
                    />
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div
                className="detail"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <h3>{product.name}</h3>
                <p>{product.price} جنية</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Classic;