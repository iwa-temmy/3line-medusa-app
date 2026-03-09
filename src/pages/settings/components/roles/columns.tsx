import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { Check, ArrowDown } from "lucide-react";
import { ReactComponent as Download } from "@/icons/download.svg";

export type RoleItem = {
  id: string;
  name: string;
  type: string;
  date_created: string;
  status: "active" | "inactive";
  role_users: string[];
};

const MAX_VISIBLE_AVATARS = 4;

export const columns: ColumnDef<RoleItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => (
      <span className="flex items-center text-gray-500 text-xs gap-1">
        Name <ArrowDown className="size-3.5" />
      </span>
    ),
    cell: ({ row }) => (
      <span className="text-gray-900 text-sm">{row.getValue("name")}</span>
    ),
  },
  {
    accessorKey: "type",
    header: () => <span className="text-gray-500 text-xs">Type</span>,
    cell: ({ row }) => (
      <span className="text-gray-500 text-sm">{row.getValue("type")}</span>
    ),
  },
  {
    accessorKey: "date_created",
    header: () => <span className="text-gray-500 text-xs">Date created</span>,
    cell: ({ row }) => (
      <span className="text-gray-500 text-sm">
        {row.getValue("date_created")}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: () => <span className="text-gray-500 text-xs">Status</span>,
    cell: ({ row }) => {
      const status = row.getValue<RoleItem["status"]>("status");
      return (
        <Badge variant={status}>
          {status === "active" && <Check className="h-3 w-3" />}
          {status === "active" ? "Active" : "In Active"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "role_users",
    header: () => <span className="text-gray-500 text-xs">Role users</span>,
    cell: ({ row }) => {
      const users: string[] = row.getValue("role_users");
      const visible = users.slice(0, MAX_VISIBLE_AVATARS);
      const overflow = users.length - MAX_VISIBLE_AVATARS;

      return (
        <div className="flex items-center">
          {visible.map((src, i) => (
            <Avatar
              key={i}
              className="h-8 w-8 border-2 border-white -ml-2 first:ml-0"
            >
              <AvatarImage src={src} />
              <AvatarFallback className="text-xs">U</AvatarFallback>
            </Avatar>
          ))}
          {overflow > 0 && (
            <span className="ml-1 text-xs text-gray-500 font-medium">
              +{overflow}
            </span>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => (
      <button className="[&_svg]:stroke-gray-600">
        <Download className="size-4" />
      </button>
    ),
  },
];
