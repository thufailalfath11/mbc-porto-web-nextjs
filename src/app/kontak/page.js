import ParticklesBG from "@/common/ParticklesBG/ParticklesBG";
import Kontak from "@/components/Kontak/Kontak";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

const kontak = () => {
  return (
      <div className="container">
        <Navbar />
        <Kontak />
        <Footer />
      </div>
  );
};

export default kontak;
