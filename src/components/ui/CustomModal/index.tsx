import { ReactNode } from "react";

import clsx from "clsx";
import { Modal, ModalContent } from "@heroui/react";

interface ICustomModlaProps {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
  className?: string;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  placementMoblie?: "bottom" | "center";
}

const CustomModal = (props: ICustomModlaProps) => {
  const {
    isOpen,
    onClose,
    size,
    children,
    placementMoblie,
    className = "",
    ...rest
  } = props;
  return (
    <Modal
      hideCloseButton={true}
      isOpen={isOpen}
      size={size}
      className={clsx({
        [className]: !!className,
      })}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      classNames={{
        backdrop: "!bg-[#ffffff10]",
        base: ["bgModal !z-[10000] shadowModal"],
      }}
      onClose={onClose}
      isDismissable={true}
      isKeyboardDismissDisabled={true}
      placement={placementMoblie === "bottom" ? "bottom" : "center"}
      {...rest}
    >
      <ModalContent>{() => <>{children}</>}</ModalContent>
    </Modal>
  );
};
export default CustomModal;
