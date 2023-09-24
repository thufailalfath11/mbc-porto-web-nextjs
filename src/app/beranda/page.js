import ParticklesBG from "@/common/ParticklesBG/ParticklesBG";
import Beranda from "@/components/Beranda/Beranda";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

import React from "react";


const beranda = () => {
  return (

    <div>
      <div className="w-full h-screen absolute top-0 left-0 z-0">
        <ParticklesBG />
      </div>
        <div className="container">
          <Navbar />
          <Beranda />
          <Footer />
      
      </div>
    </div>
  );
};

export default beranda;
