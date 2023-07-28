/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = () => {
  const product = {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    productName: "Product 1",
    category: "CPU / Processor",
    price: 199.99,
    status: "In Stock",
    individualRating: 4.7,
    averageRating: 4.5,
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
        comment: "Great product!",
      },
      {
        id: 2,
        username: "user123",
        comment: "Nice product!",
      },
      {
        id: 3,
        username: "user123",
        comment: "Awesome product!",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.productName}
              </h1>
              <div className="flex mb-1">
                <span className="flex items-center">
                  {new Array(Math.floor(product?.averageRating))
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
                  {new Array(5 - Math.floor(product?.averageRating))
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

                  <span className="text-gray-600 ml-3">
                    {product?.averageRating} Stars ( Average )
                  </span>
                </span>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {new Array(Math.floor(product?.individualRating))
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
                  {new Array(5 - Math.floor(product?.individualRating))
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

                  <span className="text-gray-600 ml-3">
                    {product?.individualRating} Stars ( Individual )
                  </span>
                </span>
              </div>
              <div className="mb-2">
                {Object.keys(product?.keyFeatures)?.map((key) => (
                  <li key={key}>{`${key} : ${product?.keyFeatures[key]}`}</li>
                ))}
              </div>
              <p className="leading-relaxed">{product?.description}</p>

              <div className="flex pt-3 mt-3 border-t-2 border-gray-100">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-auto">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Reviews area  */}
          <div className="mt-10">
            <h1 className="text-3xl mb-5 font-semibold">Reviews</h1>
            {product?.reviews?.map((review) => (
              <div key={review?.id}>
                <a className="inline-flex items-center my-2">
                  <img
                    alt="testimonial"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oNqnXQP4-i-snZY1Lz2ETNq1AfGDeTHlw6DeRWw8I6OKk-7U4GRUeV0RmkVr9N8M2_s&usqp=CAU"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {review?.username}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {review?.comment}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;

// ProductDetailsPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
