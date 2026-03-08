import { ReactComponent as Home } from "@/icons/menu/home.svg";
import { ReactComponent as Dashboard } from "@/icons/menu/dashboard.svg";
import { ReactComponent as Projects } from "@/icons/menu/projects.svg";
import { ReactComponent as Tasks } from "@/icons/menu/tasks.svg";
import { ReactComponent as Reporting } from "@/icons/menu/reporting.svg";
import { ReactComponent as Users } from "@/icons/menu/users.svg";
import { ReactComponent as Support } from "@/icons/menu/support.svg";
import { ReactComponent as Settings } from "@/icons/menu/settings.svg";

type Menu = {
  href?: string;
  label: string;
  key: string;
  active?: boolean;
  icon?: any;
  isDivider?: boolean;
};

export function getMenuList(pathname: string): Menu[] {
  return [
    {
      label: "Home",
      href: "/home",
      icon: Home,
      key: "home",
      active: pathname === "/home",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Dashboard,
      key: "dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
      icon: Projects,
      key: "projects",
      active: pathname === "/projects",
    },
    {
      label: "Tasks",
      href: "/tasks",
      icon: Tasks,
      key: "tasks",
      active: pathname === "/tasks",
    },
    {
      label: "Reporting",
      href: "/reporting",
      icon: Reporting,
      key: "reporting",
      active: pathname === "/reporting",
    },
    {
      label: "Users",
      href: "/users",
      icon: Users,
      key: "users",
      active: pathname === "/users",
    },
    {
      label: "ia",
      isDivider: true,
      key: "divider-1",
    },
    {
      label: "Support",
      href: "/support",
      icon: Support,
      key: "support",
      active: pathname === "/support",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
      key: "settings",
      active: pathname === "/settings",
    },
  ];
}
