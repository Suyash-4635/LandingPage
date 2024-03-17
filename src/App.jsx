import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Error from "./Components/Error";
import "./index.css";
import Footer from "./Components/Footer";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Homepage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}
export default App;