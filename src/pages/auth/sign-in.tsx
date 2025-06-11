import { ReactElement } from "react";

import dynamic from "next/dynamic";
import MainLayout from "@/layout/MainLayout";

const SignIn = dynamic(() => import("@/components/views/Auth/SignIn"), {
  ssr: false,
});

const SignInPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default SignInPage;
