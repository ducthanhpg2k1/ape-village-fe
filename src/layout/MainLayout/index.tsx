import { ReactNode } from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { ROUTE_PATH } from "@/utils/const";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <div className="w-full h-[100dvh] overflow-auto overflow-x-hidden bgMain">
      <div className="flex flex-col min-h-[100dvh] w-full">
        <MainHeader />
        <div className="bg-no-repeat bg-[length:100%_100%] bg-[url('/bg-main.png')] flex-1">
          {children}
        </div>
        {router.pathname === ROUTE_PATH.HOME ? <Footer /> : null}
      </div>
    </div>
  );
};
export default MainLayout;
