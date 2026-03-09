import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/datatable";
import { ReactComponent as Download } from "@/icons/download.svg";
import { rolesTableData } from "../../data"; // add this import

const RolesDataTable = () => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row justify-between text-sm">
        <h2 className="text-gray-700 text-xl font-medium">User Roles</h2>
        <Button
          className="text-gray-700 text-sm font-medium w-fit [&_svg]:stroke-gray-700"
          variant="outline"
        >
          <Download /> Download all
        </Button>
      </div>
      <DataTable columns={columns} data={rolesTableData} />
    </section>
  );
};

export default RolesDataTable;
