import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import ProductPage from "./components/ProductPage";
import ProductDetail from "./components/ProductDetailPage"; 
import ProductDetailPage from "./components/ProductDetailPage";

const App = () => {

const [searchQuery,setSearchQuery]=useState("");

  return (
    <Router>
      <div className="h-auto w-full">
        <Navbar  setSearchQuery={setSearchQuery}/>
        <Routes>
          {/* Home Page */}
          <Route
            path="/product"
            element={
              <>
                <Category />
                <ProductPage searchQuery={searchQuery} />
              </>
            }
          />
          
          {/* Product Detail Page */}
         <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
