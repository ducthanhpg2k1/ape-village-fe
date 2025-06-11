import CardAuth from "@/components/ui/CardAuth";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import Text from "@/components/ui/Text";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import ModalResetPasswordSuccess from "./ModalResetPasswordSuccess";

const ResetPassword = () => {
  const [isSendResetPassword, setIsSendResetPassword] = useState(false);
  const refModalResetPasswordSuccess: any = useRef(null);
  return (
    <div className="max-w-[400px] min-w-[400px] mx-auto py-[60px]">
      {isSendResetPassword ? (
        <FormChangeNewPassword
          handleContinueChangePassword={() =>
            refModalResetPasswordSuccess.current.onOpen()
          }
        />
      ) : (
        <FormSubmitEmail
          handleContinueSubmit={() => setIsSendResetPassword(true)}
        />
      )}

      <ModalResetPasswordSuccess ref={refModalResetPasswordSuccess} />
    </div>
  );
};
export default ResetPassword;

const FormChangeNewPassword = ({
  handleContinueChangePassword,
}: {
  handleContinueChangePassword: VoidFunction;
}) => {
  return (
    <div className="items-center w-full flex gap-5 flex-col">
      <Text className="text-[32px] font-black gradient-text-home-page">
        RESET PASSWORD
      </Text>

      <CardAuth>
        <div className="flex flex-col gap-[57px]">
          <div className="flex flex-col gap-6">
            <InputPassword
              placeholder="Enter your new password"
              label="New Password"
            />
            <InputPassword
              placeholder="Enter your new password"
              label="Confirm New Password"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Button
              onPress={handleContinueChangePassword}
              className="min-h-[60px] bgButtonMain rounded-xl"
            >
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
        </div>
      </CardAuth>
    </div>
  );
};

const FormSubmitEmail = ({
  handleContinueSubmit,
}: {
  handleContinueSubmit: VoidFunction;
}) => {
  return (
    <div className="items-center w-full flex gap-5 flex-col">
      <Text className="text-[32px] font-black gradient-text-home-page">
        RESET PASSWORD
      </Text>

      <CardAuth>
        <div className="flex flex-col gap-[57px]">
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
          </div>
          <div className="flex flex-col gap-6">
            <Button
              onPress={() => handleContinueSubmit()}
              className="min-h-[60px] bgButtonMain rounded-xl"
            >
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
            <div className="bgResetPasswordSuccess flex justify-center items-center min-h-[42px] rounded-xl py-3">
              <Text type="font-16-600" className="text-white">
                An email has been sent!
              </Text>
            </div>
          </div>
        </div>
      </CardAuth>
    </div>
  );
};
