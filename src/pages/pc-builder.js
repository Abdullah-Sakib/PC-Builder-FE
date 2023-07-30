import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { toast } from "react-hot-toast";

const PCBuilder = ({ categories }) => {
  const { pc } = useSelector((state) => state?.pcBuilder);
  const buildPc = () => {
    toast.success('Congratulations! You have successfully build your PC');
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-black">
        <div className="w-3/4 mx-auto">
          {categories?.categories?.map((category) => (
            <div key={category?.id}>
              <div className="p-4 w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col items-center">
                  <div className="w-16 h-16 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <Image
                      className="contain h-full w-full rounded-full"
                      src={category?.image}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="flex-grow items-center flex">
                    <h2 className="text-gray-900 text-lg title-font font-medium  ">
                      {category?.category}
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href={`/components/${category?.category}`}
                      key={category?._id}
                    >
                      <button className="btn btn-primary mt-3 sm:mt-0 text-white">
                        Choose
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {Object.keys(pc)?.map(
                (key, i) =>
                  key === category?.category && (
                    <div
                      key={i}
                      className="w-[90%] sm:w-[95%] lg:w-[97%] mx-auto mb-4 pt-0 bg-gray-200 rounded-lg"
                    >
                      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col">
                        <div className="w-full sm:w-36 h-36 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
                          <Image
                            src={pc[key]?.image}
                            className=" w-full h-full rounded-lg"
                            width={300}
                            height={300}
                            alt=""
                          />
                        </div>
                        <div className="flex-grow ">
                          <h2 className="text-gray-900 text-lg title-font font-medium  ">
                            {pc[key]?.productName}
                          </h2>
                          <h2 className="text-gray-900 text-base title-font font-medium  mb-4">
                            {pc[key]?.category}
                          </h2>
                          <div className="flex mb-1">
                            <span className="flex items-center">
                              <span className="text-gray-600 mr-3">
                                {pc[key]?.averageRating} Stars
                              </span>
                              {new Array(Math.floor(pc[key]?.averageRating))
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
                              {new Array(5 - Math.floor(pc[key]?.averageRating))
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

                          <p className="text-base">Status: {pc[key]?.status}</p>
                        </div>
                        <div className="flex items-center">
                          <h1 className="  text-2xl">${pc[key]?.price}</h1>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          ))}
          <div className="flex justify-center my-5">
            <button
              className="btn btn-primary text-white "
              onClick={() => buildPc()}
              disabled={Object.keys(pc)?.length < 6}
            >
              Complete Build
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PCBuilder;

export const getServerSideProps = async function () {
  const categoriesRes = await fetch("https://pc-builder-backend-0oh1.onrender.com/categories");
  const categories = await categoriesRes.json();
  return {
    props: {
      categories: categories,
    },
  };
};
