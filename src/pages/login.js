import RootLayout from "@/components/layouts/RootLayout";
import { BsGoogle, BsGithub } from "react-icons/bs";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-96 mb-4">
      <div>
        <h1 className="text-black text-center text-lg mb-6 font-semibold">
          Login with <br /> Google or Github
        </h1>
        <div className="text-black flex bg-gray-200 p-4 w-52 justify-between rounded">
          <BsGoogle className="text-3xl cursor-pointer" />
          <BsGithub className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
