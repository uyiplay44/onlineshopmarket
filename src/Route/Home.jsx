import React from "react";
import Navbar from "../component/NavBar/Navbar";
import Herosection from "../component/HeroSection/Herosection";
import Logosection from "../component/LogoSection/Logosection";
import Aboutsecition from "../component/AboutSection/Aboutsecition";
import Banner from "../component/Banner/Banner";
import ItemCollect from "../component/ItemCollection/ItemCollect";
import { Seller } from "../component/Seller/Seller";
import DisplaySection from "../component/DisplaySectiob/DisplaySection";
import NewProductItem from "../component/NewProductItem/NewProductItem";

function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Herosection />
      <Logosection />
      <Aboutsecition />
      <ItemCollect />
      <Seller />
      <DisplaySection />
      <NewProductItem />
    </div>
  );
}

export default Home;
