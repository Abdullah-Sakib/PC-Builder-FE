import RootLayout from "@/components/layouts/RootLayout";

export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
