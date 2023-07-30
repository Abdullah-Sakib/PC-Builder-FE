/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesPage = ({ product }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="container mx-auto bg-white py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-black">
          {product?.map((product) => (
            <Link
              key={product?._id}
              href={`/product/${product?._id}`}
              className="mx-auto"
            >
              <div className="card w-72 md:w-96 glass">
                <figure className="h-60 border-b-2">
                  <Image
                    src={product?.image}
                    className="h-full w-full image-full"
                    height={700}
                    width={700}
                    alt="product"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product?.productName}</h2>
                  <div className="flex">
                    <span className="font-semibold mr-1">
                      Ratting: {product?.averageRating}
                    </span>{" "}
                    <div className="flex">
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-green-500"
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
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPage;

export const getStaticPaths = async function () {
  const res = await fetch("https://pc-builder-backend-0oh1.onrender.com/products");
  const AllProducts = await res.json();


  const paths = AllProducts?.products?.map((product) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async function (context) {
  const { params } = context;
  const { category } = params;
  const res = await fetch(
    `https://pc-builder-backend-0oh1.onrender.com/category-products/${category}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: 30,
  };
};
