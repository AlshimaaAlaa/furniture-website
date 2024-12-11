import React from "react";
import "./Item.scss";
import { useNavigate } from "react-router-dom";
function Items() {
  const navigate = useNavigate();
  return (
    <div className="itemContainer">
      <div className="item">
        <div style={{ padding: "0px 20px 0px 20px" }}>
          <h3>اثاث نيو كلاسيك</h3>
          <button onClick={()=>navigate('/Modren')} style={{cursor:"pointer"}} className="navigate"> تصفح الأن</button>
        </div>
          <img src="/assets/images/Image Product (2).png" alt="product" />
      </div>
      <div className="item">
        <div style={{ padding: "0px 20px 0px 20px" }}>
          <h3>اثاث كلاسيكي</h3>
          <button style={{cursor:"pointer"}} onClick={()=>navigate('/Classic')} className="navigate"> تصفح الأن</button>
        </div>
          <img src="/assets/images/Image Product (4).png" alt="product" />
      </div>
    </div>
  );
}
export default Items;