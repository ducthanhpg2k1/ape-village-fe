import Text from "@/components/ui/Text";
import Image from "next/image";
import Siderbar from "../Siderbar";
import { Button } from "@heroui/react";
import { useRouter } from "next/router";
import { ROUTE_PATH } from "@/utils/const";
import { useMemo } from "react";
import clsx from "clsx";

const MainHeader = () => {
  const router = useRouter();

  const handleClickSignIn = () => {
    router.push(ROUTE_PATH.SIGN_IN);
  };
  const handleClickSignUp = () => {
    router.push(ROUTE_PATH.SIGN_UP);
  };

  const pathName = useMemo(() => {
    return router.pathname;
  }, [router.pathname]);

  return (
    <div className="w-full sticky top-0 backdrop-blur-lg z-[1000] bg-[#00000033] border-1 border-white/10">
      <div className="max-w-[1440px] mx-auto py-[10px] flex justify-between items-center px-4">
        <div
          onClick={() => router.push(ROUTE_PATH.HOME)}
          className="cursor-pointer flex items-center"
        >
          <Image alt="logo" src={"/images/logo.png"} width={53} height={62} />
          <Text type="font-24-900" className="text-white">
            APE VILLAGE by APERO{" "}
          </Text>
        </div>
        <div className="flex items-center gap-[30px]">
          <Siderbar />
          <div className="flex items-center gap-4">
            <Button
              onPress={handleClickSignIn}
              className={clsx(
                "bg-transparent py-2 rounded-lg px-4 border-1 border-gray-100",
                {
                  "bg-[#FFA5001A] border-primary":
                    pathName === ROUTE_PATH.SIGN_IN,
                }
              )}
            >
              <Text type="font-16-500" className="text-gray">
                Sign In
              </Text>
            </Button>

            <Button
              onPress={handleClickSignUp}
              className={clsx(
                "bg-transparent py-2  rounded-lg px-4 border-1 border-gray-100",
                {
                  "bg-[#FFA5001A] border-primary":
                    pathName === ROUTE_PATH.SIGN_UP,
                }
              )}
            >
              <Text type="font-16-500" className="text-gray">
                Sign Up
              </Text>
            </Button>
          </div>

          {/* <Button className="bg-transparent py-2 rounded-lg px-4 border-transparent">
            <Text type="font-16-500" className="gradient-text">
              Sign Up
            </Text>
          </Button> */}
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
