import { ReactElement } from "react";

import dynamic from "next/dynamic";
import MainLayout from "@/layout/MainLayout";

const ResetPassword = dynamic(() => import("@/components/views/Auth/ResetPassword"), {
  ssr: false,
});

const ResetPasswordPage = () => {
  return (
    <>
      <ResetPassword />
    </>
  );
};

ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ResetPasswordPage;
