/* eslint-disable @next/next/no-img-element */
import React from "react";

const FeaturedCategories = () => {
  const featuredCategories = [
    {
      id: "101",
      category: "CPU / Processor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ACZibLrMtNmJ-jRJIJr_v6lCbt15ZdB8lQ&usqp=CAU",
    },
    {
      id: "102",
      category: "Motherboard",
      image:
        "https://history-computer.com/wp-content/uploads/2022/08/shutterstock_2056796405-1200x700.jpg",
    },
    {
      id: "103",
      category: "RAM",
      image:
        "https://irnpost.com/wp-content/uploads/2022/04/0x0.jpg",
    },
    {
      id: "104",
      category: "Power Supply Unit",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ACZibLrMtNmJ-jRJIJr_v6lCbt15ZdB8lQ&usqp=CAU",
    },
    {
      id: "105",
      category: "Storage Device",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZX_leOaalFd_hUtTPaumWAZKGYPu4KvrvOQ&usqp=CAU",
    },
    {
      id: "106",
      category: "Monitor",
      image:
        "https://eu.redmagic.gg/cdn/shop/files/banner_tablet_2x_11e02124-2881-48e0-8b88-12a11b1c09ca_x448@2x.jpg?v=1679985002",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {featuredCategories?.map((item) => (
            <div key={item?.id} className="p-4 w-1/2 md:w-1/5 lg:w-1/6 sm:mb-0 mb-6 hover:bg-gray-100 duration-300 rounded-lg cursor-pointer">
              <div className="rounded-lg h-28 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={item?.image}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-center text-gray-900 mt-5">
                {item?.category}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
