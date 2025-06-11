import Text from "@/components/ui/Text";
import { Button } from "@heroui/react";
import Image from "next/image";

const DATA_INFORMATION = [
  {
    id: 1,
    count: "500+",
    text: "Apps Published",
  },
  {
    id: 1,
    count: "700M+",
    text: "Downloads",
  },
  {
    id: 1,
    count: "200+",
    text: "Partners",
  },
];

const Home = () => {
  return (
    <div className="pt-[93px] w-6/12 mx-auto flex flex-col justify-center items-center gap-[153px]">
      <div className="flex flex-col px-6 items-center text-center gap-6">
        <Image
          src={"/text-home.png"}
          alt=""
          className="w-auto h-auto"
          width={850}
          height={212}
        />
        <Text type="font-24-300" className="text-gray">
          APE VILLAGE by APERO — Apero’s official publishing platform
          <br /> designed to streamline collaboration and empower our partners
          <br />
          throughout every stage of the app publishing journey
        </Text>
      </div>
      <div className="flex items-center flex-col gap-6">
        <div className="flex items-center gap-8">
          {DATA_INFORMATION?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-6 rounded-2xl min-w-[255px] min-h-[118px] items-center justify-center bg-white/5 border-1 border-white/10  gap-3"
            >
              <Text type="font-30-900" className="text-primary">
                {item.count}
              </Text>
              <Text type="font-16-500" className="text-gray">
                {item.text}
              </Text>
            </div>
          ))}
        </div>
        <Image src={'/icons/ic-arrow-down.svg'} width={32} height={32} alt="ic-arrow-down"/>
      </div>
    </div>
  );
};
export default Home;
