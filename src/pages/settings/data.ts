import type { RoleItem } from "./components/roles/columns";

export const roles = [
  { id: 1, name: "Superadmin", last_active: "06/2023" },
  { id: 2, name: "Developeradmin", last_active: "01/2023" },
  { id: 3, name: "Supportadmin", last_active: "10/2022" },
];

export const rolesTableData: RoleItem[] = [
  {
    id: "1",
    name: "Superadmin",
    type: "DEFAULT",
    date_created: "Jan 1, 2023",
    status: "active",
    role_users: [
      "https://i.pravatar.cc/40?img=1",
      "https://i.pravatar.cc/40?img=2",
      "https://i.pravatar.cc/40?img=3",
      "https://i.pravatar.cc/40?img=4",
      "https://i.pravatar.cc/40?img=5",
      "https://i.pravatar.cc/40?img=6",
    ],
  },
  {
    id: "2",
    name: "Merchantadmin",
    type: "DEFAULT",
    date_created: "Feb 1, 2023",
    status: "active",
    role_users: [
      "https://i.pravatar.cc/40?img=7",
      "https://i.pravatar.cc/40?img=8",
      "https://i.pravatar.cc/40?img=9",
      "https://i.pravatar.cc/40?img=10",
      "https://i.pravatar.cc/40?img=11",
    ],
  },
  {
    id: "3",
    name: "supportadmin",
    type: "DEFAULT",
    date_created: "Feb 1, 2023",
    status: "active",
    role_users: [
      "https://i.pravatar.cc/40?img=12",
      "https://i.pravatar.cc/40?img=13",
      "https://i.pravatar.cc/40?img=14",
      "https://i.pravatar.cc/40?img=15",
    ],
  },
  {
    id: "4",
    name: "sales personnel",
    type: "CUSTOM",
    date_created: "Mar 1, 2023",
    status: "active",
    role_users: [
      "https://i.pravatar.cc/40?img=16",
      "https://i.pravatar.cc/40?img=17",
      "https://i.pravatar.cc/40?img=18",
    ],
  },
  {
    id: "5",
    name: "Deputy sales personnel",
    type: "CUSTOM",
    date_created: "Apr 1, 2023",
    status: "inactive",
    role_users: [
      "https://i.pravatar.cc/40?img=19",
      "https://i.pravatar.cc/40?img=20",
      "https://i.pravatar.cc/40?img=21",
    ],
  },
  {
    id: "6",
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    date_created: "May 1, 2023",
    status: "active",
    role_users: [
      "https://i.pravatar.cc/40?img=22",
      "https://i.pravatar.cc/40?img=23",
      "https://i.pravatar.cc/40?img=24",
    ],
  },
  {
    id: "7",
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    date_created: "Jun 1, 2023",
    status: "active",
    role_users: [
      "https://i.pravatar.cc/40?img=25",
      "https://i.pravatar.cc/40?img=26",
    ],
  },
];
