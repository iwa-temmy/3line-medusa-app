import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/sidebar/menu";
import { Link } from "react-router-dom";
import Input from "../input";
import { Search } from "lucide-react";
import React from "react";

export function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean | undefined;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <aside
      className={cn(
        "fixed top-13 md:top-0 left-0 z-20 h-screen bg-white w-[18rem]  md:translate-x-0 transition-[width] ease-in-out duration-300 border-r border-r-gray-100 md:w-80",
        !sidebarOpen
          ? " -translate-x-96 opacity-0"
          : "translate-x-0 opacity-100",
      )}
    >
      <div className="relative h-full flex flex-col p-4 overflow-y-auto">
        <Button
          className="hidden md:block mb-5 pl-0 outline-none"
          variant="link"
          asChild
        >
          <Link to="/dashboard">
            <img src="/assets/logo.svg" alt="Logo" className="h-8" />
          </Link>
        </Button>
        <Input
          className="w-full border border-primary-300  shadow-[0_0_0_6px_rgba(214,187,251,0.1)] text-base rounded-lg placeholder:text-gray-900"
          size="md"
          startAdornment={<Search className="size-5 stroke-gray-500" />}
          placeholder="Olivia Rhye"
        />
        <Menu setSidebarOpen={setSidebarOpen} />
      </div>
    </aside>
  );
}
