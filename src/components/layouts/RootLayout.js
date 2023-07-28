import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const RootLayout = ({ children }) => {
 
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
