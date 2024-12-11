import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Classic.scss";
import { useNavigate } from "react-router-dom";

function Classic() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "http://104.248.251.235:8080/products/",
          { headers: { accept: "application/json" } }
        );

        if (response.data.status === "success") {
          setLoading(false);
          const classicProducts = response.data.data.filter(
            (product) =>
              product.category &&
              (product.category.name === "كلاسيك" ||
                product.category.name === "classic")
          );
          setProducts(classicProducts);
          setSortedProducts(classicProducts);
        } else {
          setLoading(false);
          setError(error);
        }
      } catch (err) {
        setLoading(false);
        setError(error);
        console.error("Error fetching data:", err);
      }
    }

    fetchProducts();
  }, [error]);

  useEffect(() => {
    // Sort products
    const sorted = [...products];
    if (sortOption === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  }, [sortOption, products]);

  return (
    <div className="classic">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/assets/images/gallery-round-svgrepo-com 1.png"
          alt="classic"
        />
        <p style={{ fontWeight: "bolder", margin: "0px 10px" }}>
          المعرض
          <span style={{ color: "lightgray", margin: "0px 5px" }}>
            {" "}
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
          ترتيب حسب:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{
            padding: "5px 20px",
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
        {error ? (
          <p
            className="text-danger"
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "Amiri",
            }}
          >
            حدث خطأ اخترأثناء تحميل البيانات...
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
        ) : products.length === 0 ? (
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
          <ul className="product-list">
            {sortedProducts.map((product) => (
              <li
                key={product.id}
                className="product-item"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/Classic/${product.id}`)}
              >
                <div className="product-images">
                  {product.images && product.images.length > 0 ? (
                    product.images.map((image) => (
                      <img
                        key={image.id}
                        src={image.image}
                        alt={`Product${product.name}image`}
                      />
                    ))
                  ) : (
                    <p>لا توجد صور متاحة</p>
                  )}
                </div>
                <div className="detail">
                  <h3>{product.name}</h3>
                  <p style={{ fontWeight: "bolder" }}>
                    السعر :{" "}
                    <span
                      style={{
                        fontWeight: "lighter",
                        margin: "10px 5px 0px 0px",
                      }}
                    >
                      {product.price} جنية{" "}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Classic;