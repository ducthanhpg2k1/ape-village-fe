/* eslint-disable indent */
import { forwardRef, useImperativeHandle, useState } from "react";

import CustomModal from "@/components/ui/CustomModal";
import { Button, ModalBody } from "@heroui/react";
import Text from "@/components/ui/Text";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

interface IModalResetPasswordSuccess {}

const ModalResetPasswordSuccess = (
  props: IModalResetPasswordSuccess,
  ref?: any
) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      onOpen: (id: string) => {
        setVisible(true);
      },
      onClose: () => setVisible(false),
    };
  });
  const onVisible = () => {
    setVisible(!visible);
  };

  return (
    <CustomModal
      placementMoblie="center"
      size="lg"
      isOpen={visible}
      onClose={onVisible}
    >
      <>
        <ModalBody className="inse p-[33px] items-center flex flex-col gap-6">
          <Image
            src="/images/img_cloud-success-filled.png"
            width={82}
            height={82}
            alt=""
          />
          <div className="flex justify-between items-center">
            <Text type="font-24-700" className="text-white text-center">
              Your password has been changed successfully!
            </Text>
          </div>
          <Button
            isIconOnly
            onPress={onVisible}
            className="bgButtonMain mt-3 rounded-xl min-w-[90px] min-h-[52px]"
          >
            <X size={24} color="black" />
          </Button>
        </ModalBody>
      </>
    </CustomModal>
  );
};
export default forwardRef(ModalResetPasswordSuccess);
