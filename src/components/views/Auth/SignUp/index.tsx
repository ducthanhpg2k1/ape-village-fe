import CardAuth from "@/components/ui/CardAuth";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import SelectCustom from "@/components/ui/SelectCustom";
import Text from "@/components/ui/Text";
import { ROUTE_PATH } from "@/utils/const";
import { Button, Checkbox } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push(ROUTE_PATH.VERIFY_CODE);
  };
  return (
    <div className=" mx-auto py-[60px]">
      <div className="items-center w-full flex gap-8 flex-col">
        <div className="flex flex-col items-center gap-4">
          <Text className="text-[36px] font-black gradient-text-home-page">
            Join APE VILLAGE by APERO
          </Text>
          <Text className="text-[18px] text-gray">
            Create your account to start publishing
          </Text>
        </div>

        <div className="min-w-[450px] max-w-[450px]">
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
                <InputText
                  placeholder="Company Name"
                  label="Enter company name"
                />
                <InputText
                  placeholder="Representative"
                  label="Enter representative name"
                />
                <InputText
                  placeholder="Enter link"
                  label="Link Website/Linkedin/Meta/X"
                />
                <div className="flex flex-col gap-4">
                  <Text type="font-14-500" className="text-gray">
                    Phone Number
                  </Text>
                  <div className="flex items-center gap-2">
                    <div className="min-w-[110px]">
                      <SelectCustom
                        options={[
                          {
                            key: "1",
                            label: "+84",
                          },
                          {
                            key: "2",
                            label: "+78",
                          },
                        ]}
                        placeholder="VN +84"
                        label=""
                      />
                    </div>

                    <div className="w-full">
                      <InputText placeholder="Enter phone number" label="" />
                    </div>
                  </div>
                </div>

                <InputText placeholder="Enter team size" label="Team Size" />
                <SelectCustom
                  options={[
                    {
                      key: "1",
                      label: "Country 1",
                    },
                    {
                      key: "2",
                      label: "Country 2",
                    },
                  ]}
                  placeholder="Country"
                  label="Country"
                />
                <InputPassword
                  placeholder="Enter your password"
                  label="Password"
                />
                <InputPassword
                  placeholder="Confirm password"
                  label="Confirm password"
                />
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
                  <Text type="text-14-400">
                    I agree to the{" "}
                    <Text className="text-primary underline" element="span">
                      Terms of Service
                    </Text>{" "}
                    and{" "}
                    <Text className="text-primary underline" element="span">
                      Privacy Policy
                    </Text>
                  </Text>
                </Checkbox>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Button
                  onPress={handleContinue}
                  className="min-h-[60px] w-full bgButtonMain rounded-xl"
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

                <Text type="font-16-500" className="text-gray">
                  Already have an account?{" "}
                  <Text
                    type="font-16-500"
                    element="span"
                    onClick={() => router.push(ROUTE_PATH.SIGN_IN)}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Sign In
                  </Text>
                </Text>
              </div>
            </div>
          </CardAuth>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
