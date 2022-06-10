import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./components/Projects/Projects";
import ProductDetails from "./components/Projects/ProductDetails";
import Blogs from "./components/Blogs/Blogs";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#0f172a" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/project/:id" element={<ProductDetails />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
