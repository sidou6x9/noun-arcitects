import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Realisation from "./pages/Realisation/Realisations";
import ContactUs from "./pages/contact/ContactUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/realisations" element={<Realisation />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
