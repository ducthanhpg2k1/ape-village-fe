import { ReactNode } from "react";

const CardAuth = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-1 w-full rounded-3xl p-[33px] border-white/10 shadowAuth bg-white/5">
      {children}
    </div>
  );
};
export default CardAuth;
