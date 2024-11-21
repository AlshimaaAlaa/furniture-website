import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/Home Page/HomePage";
import Footer from "./Common Component/Footer/Footer";
import Policy from "./Components/Pages/Policy and Privacy/Policy";
import Navbar from "./Common Component/NavBar/Navbar";
import OurClients from "./Components/Pages/Our Clients/OurClients";
import ContactUs from "./Components/Pages/Contact Us/ContactUs";
import WhoWeAre from "./Components/Pages/Who We Are/WhoWeAre";
import Modren from "./Components/Pages/Furniture Exhibition/New Classic/Modren";
import Classic from "./Components/Pages/Furniture Exhibition/Classic/Classic";
import Modal from "./Common Component/Modal/Modal";
import CategoryDetails from "./Components/Pages/Furniture Exhibition/Category Details/CategoryDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/OurClients" element={<OurClients />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/Modren" element={<Modren />} />
        <Route path="/Classic" element={<Classic />} />
        <Route path="/Modal" element={<Modal />} />
        <Route path="/Modren/:id/" element={<CategoryDetails />} />
        <Route path="/Classic/:id" element={<CategoryDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
