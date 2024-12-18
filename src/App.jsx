import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Pages/Layout/Header";
import { ThumbCard } from "./Component/HomePage/ThumbCard";
import { Carousel } from "./Component/HomePage/Carousel";
import { MobileCard } from "./Pages/MobilePhones/MobileCard";
import { HomeCards } from "./Component/HomePage/HomeCards";
import { ProductDetails } from "./Pages/MobilePhones/ProductDetails";

const App = () => {
  return (
    <div>
      <Header />
      <ThumbCard />
      <Carousel />
      <MobileCard />
      <HomeCards />
      <ProductDetails />
    </div>
  );
};

export default App