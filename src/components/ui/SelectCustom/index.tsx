import { Select, SelectItem } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Text from "../Text";

interface IOptions {
  label: string;
  key: string | number;
}

interface SelectCustomProps {
  options: IOptions[];
  placeholder?: string;
  className?: string;
  rest?: any;
  label?: string;
  onChange?: any;
  value?: any;
  required?: boolean;
  defaultSelectedKeys?: any;
  isPrimary?: boolean;
}
const SelectCustom = (props: SelectCustomProps) => {
  const [openSelect, setOpenSelect] = useState(false);
  const {
    options,
    label,
    className = "",
    defaultSelectedKeys,
    placeholder,
    onChange,
    value,
    rest,
  } = props;
  const renderSelectorIcon = (open: boolean) => {
    return (
      <Image
        className={clsx("", {
          ["rotate-180"]: open,
        })}
        src={"/icons/ic-drop-down.svg"}
        width={24}
        height={24}
        alt=""
      />
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="flex items-center gap-1">
          <Text type="font-14-500" className="text-gray">
            {label}
          </Text>
        </div>
      )}
      <Select
        className={clsx("", {
          [className]: !!className,
        })}
        label=""
        labelPlacement="outside"
        radius="sm"
        variant="bordered"
        defaultSelectedKeys={defaultSelectedKeys}
        onChange={onChange}
        selectedKeys={[value]}
        value={value}
        onOpenChange={(open: boolean) => {
          setOpenSelect(!open);
        }}
        placeholder={placeholder}
        popoverProps={{
          classNames: {
            content: "p-1 rounded-lg",
          },
        }}
        classNames={{
          selectorIcon: clsx("w-[20px] h-[20px]", {}),
          value: clsx("!text-[16px] group-data-[has-value=true]:!text-white"),
          trigger:
            "min-h-[50px] data-[hover=true]:!border-primary data-[focus=true]:!border-primary  bg-white/5 border-1 border-white/10",
          popoverContent: "rounded-lg",
        }}
        {...rest}
        selectorIcon={renderSelectorIcon(openSelect)}
      >
        {options.map((item) => (
          <SelectItem key={item.key} className="capitalize">
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
export default SelectCustom;
