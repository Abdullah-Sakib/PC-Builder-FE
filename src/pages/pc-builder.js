import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";

const PCBuilder = () => {
  const categories = [
    {
      id: "101",
      category: "CPU - Processor",
      icon: <BsCpu className="text-3xl" />,
    },
    {
      id: "102",
      category: "Motherboard",
      icon: <BsMotherboard className="text-3xl" />,
    },
    {
      id: "103",
      category: "RAM",
      icon: <CgSmartphoneRam className="text-3xl" />,
    },
    {
      id: "104",
      category: "Power Supply Unit",
      icon: <ImPower className="text-3xl" />,
    },
    {
      id: "105",
      category: "Storage Device",
      icon: <MdStorage className="text-3xl" />,
    },
    {
      id: "106",
      category: "Monitor",
      icon: <FiMonitor className="text-3xl" />,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-black">
        <div className="w-3/4 mx-auto">
          {categories?.map((category) => (
            <div key={category?.id} className="p-4   w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  {
                    category?.icon
                  }
                </div>
                <div className="flex-grow items-center flex">
                  <h2 className="text-gray-900 text-lg title-font font-medium  ">
                    {category?.category}
                  </h2>
                </div>
                <div className="flex items-center">
                  <button className="btn btn-primary">Choose</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PCBuilder;
