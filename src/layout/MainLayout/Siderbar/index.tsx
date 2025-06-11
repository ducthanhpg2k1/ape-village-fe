import { ROUTE_PATH } from "@/utils/const";
import { useRouter } from "next/router";

const MENUS = [
  {
    key: "about-us",
    label: "About Us",
    href: ROUTE_PATH.ABOUT_US,
  },
  {
    key: "contact-us",
    label: "Contact Us",
    href: ROUTE_PATH.CONTACT_US,
  },
];

const Siderbar = () => {
  const router = useRouter();
  const handleRedirectPage = (link: string) => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <div className="flex items-center gap-[30px]">
      {MENUS?.map((menu) => (
        <div
          onClick={() => handleRedirectPage(menu.href)}
          key={menu.key}
          className="text-gray text-base cursor-pointer transition-all hover:text-primary"
        >
          {menu.label}
        </div>
      ))}
    </div>
  );
};
export default Siderbar;
