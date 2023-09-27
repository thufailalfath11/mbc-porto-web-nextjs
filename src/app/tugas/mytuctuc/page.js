import Footer from "@/components/Footer/page";
import MyTucTuc from "@/components/MyTucTuc/mytuctuc";
import Navbar from "@/components/Navbar/page";
import React from "react";

const bigdata = () => {
  return (
    <div className="container">
      <Navbar />
      <MyTucTuc />
      <Footer />
    </div>
  );
};

export default bigdata;
