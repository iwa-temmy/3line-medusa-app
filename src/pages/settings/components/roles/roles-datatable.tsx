import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/datatable";
import { ReactComponent as Download } from "@/icons/download.svg";
import { baseUrl } from "@/lib/constant";

const RolesDataTable = () => {
  console.log("baseUrl", baseUrl);
  return (
    <section className="space-y-6">
      <div className="flex justify-between text-sm">
        <h2 className="text-gray-700 text-xl font-medium">User Roles</h2>
        <Button
          className="text-gray-700 font-medium [&_svg]:stroke-gray-700"
          variant="outline"
        >
          <Download /> Download all
        </Button>
      </div>
      <DataTable columns={columns} data={[]} />
    </section>
  );
};

export default RolesDataTable;
