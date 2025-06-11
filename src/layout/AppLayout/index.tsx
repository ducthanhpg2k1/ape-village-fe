import { HeroUIProvider } from "@heroui/react";

const AppLayout = ({ children }: any) => {
  return (
    <main>
      <HeroUIProvider>{children}</HeroUIProvider>
    </main>
  );
};

export default AppLayout;
