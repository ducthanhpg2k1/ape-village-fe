import { Input, InputProps } from "@heroui/react";
import clsx from "clsx";
import { ReactNode } from "react";
import Text from "../Text";

interface InputTextProps extends InputProps {
  label?: string | ReactNode;
  placeholder?: string;
  className?: string;
  required?: boolean;
  errors?: any;
  readOnly?: boolean;
  defaultValue?: any;
  isDisabled?: boolean;
  autoFocus?: boolean;
  type?: any;
  radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  onBlur?: any;
  borderNone?: boolean;
  isError?: boolean;
  maxLength?: number;
  isFullName?: boolean;
  onChange?: any;
  isFilter?: boolean;
  isLesson?: boolean;
  isInput?: boolean;
  isInputSubmit?: boolean;
  inputDefault?: boolean;
  classInputWrapper?: string;
  isBlack?: boolean;
  error?: string;
  hiddenMessageError?: boolean;
  inputShare?: boolean;
  isReadOnly?: boolean;
  isInputToken?: boolean;
  isPrimary?: boolean;
}

const InputText = (props: InputTextProps) => {
  const {
    startContent,
    endContent,
    label,
    errors,
    placeholder,
    type,
    radius = "full",
    className = "",
    borderNone = false,
    readOnly,
    isDisabled,
    autoFocus,
    defaultValue,
    onChange,
    onBlur,
    value,
    inputDefault,
    maxLength,
    classInputWrapper = "",
    isError,
    isInputSubmit,
    isFullName,
    isPrimary,
    isFilter,
    name,
    isBlack,
    isLesson,
    error,
    hiddenMessageError,
    inputShare,
    isReadOnly,
    required,
    isInput,
    isInputToken,
    ...rest
  } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputToken) {
      const newValue = event.target.value.replace(/[^0-9.]/g, "");
      onChange?.({ ...event, target: { ...event.target, value: newValue } });
    } else {
      onChange?.(event);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isInputToken) {
      if (
        !/[\d.]/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "ArrowLeft" &&
        e.key !== "ArrowRight" &&
        !(e.ctrlKey && e.key === "a")
      ) {
        e.preventDefault();
      }
    }
  };

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
        endContent={endContent}
        variant="bordered"
        type={type}
        maxLength={maxLength}
        autoComplete="off"
        value={value}
        autoFocus={autoFocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        isDisabled={isDisabled}
        readOnly={readOnly}
        defaultValue={defaultValue}
        radius={radius}
        className={clsx("", {
          [className]: !!className,
        })}
        isReadOnly={isReadOnly}
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
export default InputText;
