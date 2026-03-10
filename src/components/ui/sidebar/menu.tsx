import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "../separator";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function Menu({
  setSidebarOpen,
}: {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = useLocation();
  const menuList = getMenuList(pathname?.pathname);

  function handleMobileClose() {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <div className="border-t border-t-gray-100 border-x border-x-gray-100 h-4 mt-4 rounded-t-md" />
      <nav className="h-full w-full space-y-5">
        <ul className="flex flex-col items-start space-y-1 px-1">
          {menuList.map(
            ({ href, key, label, icon: Icon, isDivider, active }) => {
              return isDivider ? (
                <li
                  key={key}
                  className="border-x border-x-gray-100 text-base w-full px-3"
                >
                  {label}
                </li>
              ) : (
                <li className="w-full" key={key}>
                  <Link
                    className={cn(
                      "flex items-center gap-3 py-2.5",
                      active && "bg-gray-50",
                    )}
                    onClick={handleMobileClose}
                    to={href as string}
                  >
                    <Icon className="size-5 stroke-gray-500" />
                    <p className="max-w-[200px] text-base text-gray-800 font-medium">
                      {label}
                    </p>
                  </Link>
                </li>
              );
            },
          )}
        </ul>
        <ul>
          <li className="bg-gray-50 text-sm  px-3 py-4 space-y-3 rounded-lg">
            <article>
              <h3 className="text-gray-900 font-medium">
                New Features available!
              </h3>
              <p className="text-gray-500 leading-5">
                Check out the new dashboard view. Pages now load faster.
              </p>
            </article>
            <img
              src="/assets/new-feature.png"
              alt="New Feature"
              className="w-full rounded-lg h-36 object-cover"
            />
            <div className="space-x-4">
              <button className="text-gray-500 font-medium text-sm">
                Dismiss
              </button>
              <button className="text-primary-700 font-medium text-sm">
                What&apos;s new?
              </button>
            </div>
          </li>
          <li className="w-full grow flex flex-col items-end space-y-3 pt-4">
            <Separator />
            <Button
              onClick={() => {}}
              variant="outline"
              className="w-full border-none justify-between h-15"
            >
              <aside className="flex gap-3 items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/assets/avatar.jpg" alt="Avatar" />
                  <AvatarFallback className="bg-primary-gradient text-primary1-400 uppercase font-semibold rounded-sm">
                    OR
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <h3 className="text-gray-900 font-medium">Olivia Rhye</h3>
                  <p className="text-gray-500">olivia@untitledui.com</p>
                </div>
              </aside>
              <LogOut className="size-5 stroke-gray-500" />
            </Button>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
