/* eslint-disable indent */
import React, { ReactNode, useState } from "react";

import { Input } from "@heroui/react";
import clsx from "clsx";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

import Text from "../Text";

interface IInputPassword {
  startContent?: ReactNode;
  label?: string | ReactNode;
  placeholder?: string;
  className?: string;
  required?: boolean;
  readOnly?: boolean;
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: any;
  value?: any;
  maxLength?: number;
}
const InputPassword = (props: IInputPassword) => {
  const {
    startContent,
    label,
    placeholder,
    className = "",
    readOnly,
    isDisabled,
    required,
    maxLength,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      {label && (
        <div className="flex items-center gap-1">
          <Text type="font-14-500" className="text-gray">
            {label}
          </Text>
        </div>
      )}
      <Input
        startContent={startContent}
        variant="bordered"
        autoComplete="off"
        maxLength={maxLength}
        isDisabled={isDisabled}
        value={value}
        readOnly={readOnly}
        defaultValue={defaultValue}
        onChange={onChange}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeIcon size={17} weight="fill" color="#E5E7EB"/>
            ) : (
              <EyeSlashIcon size={17} weight="fill" color="#E5E7EB"/>
            )}
          </button>
        }
        type={showPassword ? "text" : "password"}
        className={clsx("!mt-0", {
          [className]: !!className,
        })}
        label={""}
        classNames={{
          input: clsx(
            "data-[has-start-content=true]:ps-3 text-[16px] placeholder:text-[16px] placeholder:text-placeholder"
          ),

          inputWrapper: clsx(
            "px-3 py-[10px] bg-white/5 border-1 border-white/10 rounded-xl  min-h-[50px] data-[hover=true]:!border-primary group-data-[focus=true]:!border-primary"
          ),
        }}
        placeholder={placeholder}
        labelPlacement="outside"
        {...rest}
      />
    </div>
  );
};
export default InputPassword;
