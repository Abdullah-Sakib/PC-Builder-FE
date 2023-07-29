import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { BsGoogle, BsGithub } from "react-icons/bs";

const Login = () => {
  const router = useRouter();
  const { callbackUrl } = router.query;
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center h-96 mb-4">
      <div>
        <h1 className="text-black text-center text-lg mb-6 font-semibold">
          Login with <br /> Google or Github
        </h1>
        <div className="text-black flex bg-gray-200 p-4 w-52 justify-between rounded">
          <BsGoogle
            onClick={() =>
              signIn("google", {
                callbackUrl: callbackUrl || "http://localhost:3000",
              })
            }
            className="text-3xl cursor-pointer"
          />
          <BsGithub
            onClick={() =>
              signIn("github", {
                callbackUrl: callbackUrl || "http://localhost:3000",
              })
            }
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;

 