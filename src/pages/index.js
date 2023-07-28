/* eslint-disable @next/next/no-img-element */
import FeaturedCategories from "@/components/FeaturedCategories";
import RootLayout from "@/components/layouts/RootLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 1",
      category: "CPU / Processor",
      price: 199.99,
      status: "In Stock",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 2",
      category: "Motherboard",
      price: 149.99,
      status: "In Stock",
      rating: 4.2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 1",
      category: "CPU / Processor",
      price: 199.99,
      status: "In Stock",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 2",
      category: "Motherboard",
      price: 149.99,
      status: "In Stock",
      rating: 4.2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 1",
      category: "CPU / Processor",
      price: 199.99,
      status: "In Stock",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 2",
      category: "Motherboard",
      price: 149.99,
      status: "In Stock",
      rating: 4.2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
  ];
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <div className="container mx-auto bg-white py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-black">
        {featuredProducts?.map((product) => (
          <Link
            key={product?.id}
            href={`/product/${product?.id}`}
            className="mx-auto"
          >
            <div className="card w-72 md:w-96 glass">
              <figure>
                <img src={product?.image} alt="product" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product?.productName}</h2>
                <p className="flex">
                  <span className="font-semibold mr-1">Ratting: </span>{" "}
                  <span className="flex items-center mr-1">
                    {product?.rating}{" "}
                    <AiFillStar className="ml-1 text-orange-500" />
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {product?.category}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> $
                  {product?.price}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {product?.status}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <FeaturedCategories />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
