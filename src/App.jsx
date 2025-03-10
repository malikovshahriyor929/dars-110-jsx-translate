import React from "react";
import Header from "./components/header";
import Showcase from "./components/showcase";
import Liked from "./components/liked";
import Products from "./components/products";
import Product_proces from "./components/product_proces";
import Protect from "./components/protect";

const App = () => {
  return (
    <div className="pb-10">
      <div className="bg-[url('./shared/assets/svg/showcasebg.svg')]  ">
        <Header />
        <Showcase />
      </div>
      <Liked />
      <Products />
      <Product_proces />
      <Protect />
    </div>
  );
};

export default App;
