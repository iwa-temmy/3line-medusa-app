import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/datatable";
import { ReactComponent as Download } from "@/icons/download.svg";

const RolesDataTable = () => {
  return (
    <section className="space-y-6">
      <div className="flex justify-between text-sm">
        <h2 className="text-gray-700 text-xl font-medium">User Roles</h2>
        <Button variant="outline">
          <Download /> Download all
        </Button>
      </div>
      <DataTable columns={columns} data={[]} />
    </section>
  );
};

export default RolesDataTable;
