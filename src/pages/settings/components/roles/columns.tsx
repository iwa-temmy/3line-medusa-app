import { ColumnDef } from "@tanstack/react-table";

export type RoleItem = {
  id: string;
  name: string;
  type: string;
  date_created: string;
  status: "pending" | "processing" | "success" | "failed";
  role_users: string[];
};

export const columns: ColumnDef<RoleItem>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "date_created",
    header: "Date Created",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "role_users",
    header: "Role Users",
  },
];
