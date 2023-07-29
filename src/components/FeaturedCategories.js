/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const FeaturedCategories = ({ categories }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-semibold mb-5">Categories</h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {categories?.categories?.map((item) => (
            <Link
              href={`/categories/${item?.category}`}
              key={item?.id}
              className="p-4 w-1/2 md:w-1/5 lg:w-1/6 sm:mb-0 mb-6 hover:bg-gray-100 duration-300 rounded-lg cursor-pointer"
            >
              <div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
