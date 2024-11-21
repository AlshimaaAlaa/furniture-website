import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Modren.scss";
import { useNavigate } from "react-router-dom";

function Modren() {
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
          // Filter products to only include those with the "Modern" category
          const modernProducts = response.data.data.filter(
            (product) => product.category.name === "Modern"
          );
          setProducts(modernProducts);
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
        style={{ textAlign: "center", fontSize: "40px", marginTop: "100px"  , fontFamily:"Dancing Script"}}
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
    <div className="modern">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/assets/images/gallery-round-svgrepo-com 1.png"
          alt="modern"
        />
        <p style={{ fontWeight: "bolder", margin: "0px 10px 0px 10px" }}>
          المعرض
          <span style={{ color: "lightgray", margin: "0px 5px 0px 5px" }}>
            / أثاث مودرن
          </span>
        </p>
      </div>

      <div
        className="products"
        style={{ border: "", margin: "30px 0px 20px 0px", width: "" }}
      >
        <ul className="product-list">
          {products.map((product) => (
            <li
              key={product.id}
              className="product-item"
              onClick={() => navigate(`/Modren/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="product-images">
                {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.image}
                    alt={`Product${product.name}image`}
                    style={{ width: "", margin: "" }}
                  />
                ))}
              </div>
              <div
                className="detail"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <h3>
                  {product.name === "modern chair"
                    ? "كرسي حديث"
                    : "modren chair"}
                </h3>
                <p> {product.price} جنية</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Modren;
