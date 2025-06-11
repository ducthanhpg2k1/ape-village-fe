import CardAuth from "@/components/ui/CardAuth";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import Text from "@/components/ui/Text";
import { ROUTE_PATH } from "@/utils/const";
import { Button, Checkbox, InputOtp } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const VerifyCode = () => {
  const router = useRouter();
  return (
    <div className="max-w-[400px] min-w-[400px] mx-auto py-[60px]">
      <CardAuth>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={"/images/img-verify.png"}
              width={64}
              height={64}
              alt=""
            />
            <Text type="font-30-900" className="text-white">
              Verify Your Code
            </Text>
            <Text type="font-16-500" className="text-gray text-center">
              Enter the verification code sent to your email
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <Text type="font-14-500" className="text-gray">
              Verification Code
            </Text>
            <InputOtp
              classNames={{
                segment: "bg-white/5 border-white/10",
                segmentWrapper: "gap-x-3",
              }}
              length={6}
              size="lg"
              variant={"bordered"}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Text type="font-14-400" className="text-gray-200">
              Didn't receive the code?
            </Text>
            <Button variant="light" className="hover:!bg-white/10">
              <div className="flex items-center gap-2">
                <Image
                  src={"/icons/ic-reload.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
                <Text className="text-primary" type="font-16-600">
                  Send Code Again
                </Text>
              </div>
            </Button>
          </div>
          <Button className="min-h-[60px] w-full bgButtonMain rounded-xl">
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/ic-check.svg"}
                width={16}
                height={18}
                alt=""
              />
              <Text type="font-14-900" className="text-black">
                VERIFY
              </Text>
            </div>
          </Button>
        </div>
      </CardAuth>
    </div>
  );
};
export default VerifyCode;
