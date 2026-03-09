import React from "react";
import { Sidebar } from "./components/ui/sidebar";
import MobileNavigation from "./components/ui/sidebar/mobile-navigation";

const ProtectedLayout = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setSidebarOpen(true);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      <MobileNavigation
        sidebarOpen={sidebarOpen}
        setSideBarOpen={setSidebarOpen}
      />
      <Sidebar sidebarOpen={sidebarOpen} />
      <main
        className={`bg-gray-50 lg:ml-80 h-screen overflow-y-auto px-6 ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
