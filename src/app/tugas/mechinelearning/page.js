import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const mechinelearning = () => {
  return (
    <div className="container">
      <Navbar />
      <iframe
        src="https://prediksikualitasudara.streamlit.app/Mapping_Demo/?embed=true"
        width="100%"
        height="1080"
        frameBorder="0"
        scrolling="no"
        style={{ border: "none" }}
      ></iframe>
      <Footer />
    </div>
  );
};

export default mechinelearning;
