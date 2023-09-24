import Tentang from "@/components/Tentang/Tentang";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import React from "react";
import Image from "next/image";

const tentang = () => {
  return (
    <div className="container">
      <Navbar />
      <Tentang/>
      <Footer />
    </div>
  );
};

export default tentang;
