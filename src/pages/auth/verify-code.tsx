import { ReactElement } from "react";

import dynamic from "next/dynamic";
import MainLayout from "@/layout/MainLayout";

const VerifyCode = dynamic(() => import("@/components/views/Auth/VerifyCode"), {
  ssr: false,
});

const VerifyCodePage = () => {
  return (
    <>
      <VerifyCode />
    </>
  );
};

VerifyCodePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default VerifyCodePage;
