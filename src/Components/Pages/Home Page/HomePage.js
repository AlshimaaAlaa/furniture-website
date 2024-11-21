import React from "react";
import AboutFactory from "../../About Factory Section/AboutFactory";
import VisitUs from "../../Visit Us Section/VisitUs";
import GetTouch from "../../Get Touch Section/GetTouch";
import Clients from "../../Clients Review Section/Clients";
import Items from "../../Items Section/Items";
import Section4 from "../../Section4/Section4";
import Header from "../../Header/Header";
import ProductImage from "../../Product Images/ProductImage";
function HomePage() {
  return (
    <div>
      <Header />
      <ProductImage/>
      {/* section3 */}
      <div>
        <AboutFactory />
      </div>
      {/* end of section3 */}
      <Section4 />
      <Items />
      {/* clients section */}
      <Clients />
      {/* end of clients section */}
      {/* get touch section */}
      <GetTouch />
      {/* end of get touch section */}
      {/* visit us section  */}
      {/* <VisitUs /> */}
      {/* end of visit us section  */}
    </div>
  );
}
export default HomePage;
