import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Realisation from "./pages/Realisation/Realisations";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contact/ContactUs";
import Login from "./pages/Login/login";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NosServices from "./pages/NosServices/NosServices";
import AuthDetails from "./pages/Login/AuthDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nos-services" element={<NosServices />}></Route>
          <Route path="/realisations" element={<Realisation />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/login" element={<AuthDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
