import Button from "@/common/Button/Button";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const gis = () => {
  return (
    <div className="container">
      <Navbar />
      <Button text="Download" url='https://drive.google.com/drive/folders/1EyHMboyqCc-3ZMuI02SCLBimJw4ScpCd?usp=sharing' />
      <Footer />
    </div>
  );
};

export default gis;
