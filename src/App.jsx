import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
        </div>

        <Routes>
          <Route path="/"  element={< Blog />} />
          <Route path="/post/:id" element={<BlogDetail />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
