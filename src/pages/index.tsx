import { ReactElement } from "react";

import dynamic from "next/dynamic";
import MainLayout from "@/layout/MainLayout";

const Home = dynamic(() => import("@/components/views/Home"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
