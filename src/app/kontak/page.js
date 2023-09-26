import ParticklesBG from "@/common/ParticklesBG/ParticklesBG";
import Kontak from "@/components/Kontak/Kontak";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

const kontak = () => {
  return (
    <div>
      <div className="w-full h-screen absolute top-0 left-0 z-0">
        <ParticklesBG />
      </div>
      <div className="container">
        <Navbar />
        <Kontak />
        <Footer />
      </div>
    </div>
  );
};

export default kontak;
