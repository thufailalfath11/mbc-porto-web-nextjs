import ParticklesBG from "@/common/ParticklesBG/ParticklesBG";
import Beranda from "@/components/Beranda/Beranda";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

import React from "react";


const beranda = () => {
  return (

    <div>
      {/* ParticklesBG mencakup seluruh halaman */}
      <div className="w-full h-screen absolute top-0 left-0 z-0">
        <ParticklesBG />
      </div>
      <div className="max-w-6xl mx-auto relative z-1">
        <div className="container">
          {/* Navbar, Beranda, dan Footer berada di atas ParticklesBG */}
          <Navbar />
          <Beranda />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default beranda;
