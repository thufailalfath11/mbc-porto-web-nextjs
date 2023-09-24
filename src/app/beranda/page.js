import Beranda from "@/components/Beranda/Beranda";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import Image from "next/image";
import React from "react";

const beranda = () => {
  return (
    
    <div className="container">
      <Navbar />
      <Beranda/>
      <Footer />
    </div>
    
  );
};

export default beranda;
