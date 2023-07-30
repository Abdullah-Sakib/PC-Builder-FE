/* eslint-disable @next/next/no-img-element */
import FeaturedCategories from "@/components/FeaturedCategories";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import aorus from "../assets/aorus.jpg";

export default function Home({ products, categories }) {
  let filteredProducts = [];
  products?.products?.map((product) => {
    if (filteredProducts?.length > 0) {
      const isCategoryExist = filteredProducts?.find(
        (item) => item?.category === product?.category
      );

      if (!isCategoryExist) {
        filteredProducts.push(product);
      }
    } else {
      filteredProducts.push(product);
    }
  });

  return (
    <>
      <Navbar />
      <div className="w-full h-36 px-3 sm:px-0 sm:h-full container mx-auto my-5">
        <Image
          src={aorus}
          height={1000}
          width={1500}
          className="w-full h-full rounded-md sm:rounded-lg"
          alt=""
        />
      </div>
      <div className="container mx-auto bg-white py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-black">
        {filteredProducts?.map((product) => (
          <Link
            key={product?._id}
            href={`/product/${product?._id}`}
            className="mx-auto hover:shadow-lg duration-300 rounded-xl"
          >
            <div className="card w-72 md:w-72 glass">
              <figure className="h-48 border-b-2">
                <Image
                  src={product?.image}
                  className="h-full w-full image-full"
                  height={700}
                  width={700}
                  alt="product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">
                  {product?.productName?.length > 22
                    ? product?.productName?.slice(0, 22) + "..."
                    : product?.productName}
                </h2>
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
      <FeaturedCategories categories={categories} />
      <Footer />
    </>
  );
}

export const getStaticProps = async function () {
  const res = await fetch("https://pc-builder-be.vercel.app/products");
  const data = await res.json();

  const categoriesRes = await fetch(
    "https://pc-builder-be.vercel.app/categories"
  );
  const categories = await categoriesRes.json();
  return {
    props: {
      products: data,
      categories: categories,
    },
    revalidate: 30,
  };
};

// https://pc-builder-be.vercel.app/
