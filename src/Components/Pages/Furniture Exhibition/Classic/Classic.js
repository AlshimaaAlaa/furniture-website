/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Classic.scss";
import { useNavigate } from "react-router-dom";

function Classic() {
  const [products, setProducts] = useState([]);
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
          // Filter products to only include those with the "Classic" category
          const classicProducts = response.data.data.filter(
            (product) => product.category.name === "كلاسيك"
          );
          setProducts(classicProducts);
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

  if (loading)
    return (
      <div
        style={{ textAlign: "center", fontSize: "40px", marginTop: "100px" ,fontFamily:"Dancing Script" }}
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

      <div className="products">
        <ul className="product-list">
          {products.map((product) => (
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
                      alt={`Product ${product.name} image`}
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
