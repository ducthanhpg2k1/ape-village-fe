import CardAuth from "@/components/ui/CardAuth";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import Text from "@/components/ui/Text";
import { ROUTE_PATH } from "@/utils/const";
import { Button, Checkbox } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  return (
    <div className="max-w-[400px] min-w-[400px] mx-auto py-[60px]">
      <div className="items-center w-full flex gap-5 flex-col">
        <Text className="text-[60px] font-black gradient-text-home-page">
          Sign In
        </Text>

        <CardAuth>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <InputText
                endContent={
                  <Image
                    alt=""
                    height={16}
                    src={"/icons/ic-email.svg"}
                    width={16}
                  />
                }
                placeholder="Enter your email"
                label="Email Address"
              />
              <InputPassword
                placeholder="Enter your password"
                label="Password"
              />

              <div className="flex justify-between items-center">
                <Checkbox
                  classNames={{
                    base: "gap-1",
                    wrapper:
                      "before:!border-white/20 group-data-[hover=true]:before:bg-transparent",
                  }}
                  color="primary"
                  radius="sm"
                  defaultSelected
                >
                  <Text type="text-14-400">Remember Me</Text>
                </Checkbox>
                <Text
                  onClick={() => router.push(ROUTE_PATH.RESET_PASSWORD)}
                  className="underline text-primary cursor-pointer"
                  type="text-14-400"
                >
                  Forgot Password?
                </Text>
              </div>
            </div>

            <Button className="min-h-[60px] bgButtonMain rounded-xl">
              <div className="flex items-center gap-3">
                <Image
                  src={"/icons/ic-arrow-right.svg"}
                  width={16}
                  height={18}
                  alt=""
                />
                <Text type="font-14-900" className="text-black">
                  CONTINUE
                </Text>
              </div>
            </Button>
          </div>
        </CardAuth>
      </div>
    </div>
  );
};
export default SignIn;
