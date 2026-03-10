import { X } from "lucide-react";
import { Button } from "../button";
import { ReactComponent as Menu2 } from "@/icons/menu.svg";

const MobileNavigation = ({
  sidebarOpen,
  setSideBarOpen,
}: {
  sidebarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
}) => {
  return (
    <nav className="w-full bg-white flex justify-between items-center py-2 px-4 fixed border-b border-b-gray-100 md:hidden">
      <span className="flex items-center gap-2">
        <img src="/assets/logo.svg" alt="Logo" className="h-8" />
      </span>
      <Button
        variant="link"
        className="bg-transparent px-0 [&_svg]:size-5"
        onClick={() => setSideBarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X /> : <Menu2 className="stroke-gray-500" />}
      </Button>
    </nav>
  );
};

export default MobileNavigation;
