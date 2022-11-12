import React from "react";
import { Outlet } from "react-router-dom";
// import { Layout } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import Mobie from "../Footer/Mobie";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Mobie />
      <Footer />
    </div>
  );
};

export default MainLayout;
