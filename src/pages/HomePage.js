import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h4>home page</h4>
      <Outlet></Outlet>
    </>
  );
};

export default HomePage;
