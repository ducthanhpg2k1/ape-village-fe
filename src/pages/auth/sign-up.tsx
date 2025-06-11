import { ReactElement } from "react";

import dynamic from "next/dynamic";
import MainLayout from "@/layout/MainLayout";

const SignUp = dynamic(() => import("@/components/views/Auth/SignUp"), {
  ssr: false,
});

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default SignUpPage;
