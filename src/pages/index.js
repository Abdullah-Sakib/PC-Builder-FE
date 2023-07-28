/* eslint-disable @next/next/no-img-element */
import FeaturedCategories from "@/components/FeaturedCategories";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Link from "next/link";

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
      rating: 5,
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

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-white py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-black">
        {featuredProducts?.map((product) => (
          <Link
            key={product?.id}
            href={`/product/${product?.id}`}
            className="mx-auto hover:shadow-lg duration-300 rounded-xl"
          >
            <div className="card w-72 md:w-72 glass">
              <figure>
                <img src={product?.image} alt="product" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product?.productName}</h2>
                <div className="flex">
                  <span className="font-semibold mr-1">
                    Ratting: {product?.rating}
                  </span>{" "}
                  <div className="flex">
                    <span className="flex items-center">
                      {new Array(Math.floor(product?.rating))
                        .fill(null)
                        .map((star, i) => (
                          <svg
                            key={i}
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 text-green-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      {new Array(5 - Math.floor(product?.rating))
                        .fill(null)
                        .map((star, i) => (
                          <svg
                            key={i}
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 text-green-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                        ))}
                    </span>
                  </div>
                </div>
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
      <Footer />
    </>
  );
}
