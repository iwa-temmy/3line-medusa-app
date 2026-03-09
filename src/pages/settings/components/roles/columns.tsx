import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { Check, ArrowDown } from "lucide-react";
import { ReactComponent as Download } from "@/icons/download.svg";

type RoleUser = {
  id: number;
  name: string;
  avatar: string;
};

export type RoleItem = {
  id: number;
  name: string;
  type: string;
  dateCreated: string;
  status: "Active" | "Inactive";
  roleUsers: {
    visible: RoleUser[];
    totalCount: number;
    extraCount: string;
  };
};

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
    accessorKey: "dateCreated",
    header: () => <span className="text-gray-500 text-xs">Date created</span>,
    cell: ({ row }) => (
      <span className="text-gray-500 text-sm">
        {row.getValue("dateCreated")}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: () => <span className="text-gray-500 text-xs">Status</span>,
    cell: ({ row }) => {
      const status = row.getValue<RoleItem["status"]>("status");
      const isActive = status === "Active";
      return (
        <Badge variant={isActive ? "active" : "inactive"}>
          {isActive && <Check className="h-3 w-3" />}
          {isActive ? "Active" : "In Active"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "roleUsers",
    header: () => <span className="text-gray-500 text-xs">Role users</span>,
    cell: ({ row }) => {
      const roleUsers = row.getValue<RoleItem["roleUsers"]>("roleUsers");

      return (
        <div className="flex items-center">
          {roleUsers.visible.map((user) => (
            <Avatar
              key={user.id}
              className="h-8 w-8 border-2 border-white -ml-2 first:ml-0"
            >
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-xs">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ))}
          {roleUsers.extraCount && (
            <span className="ml-1 text-xs text-gray-500 font-medium">
              {roleUsers.extraCount}
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
