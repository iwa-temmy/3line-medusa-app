"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "./skeleton";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading?: boolean;
  loaderRowCount?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading,
  loaderRowCount = 6,
}: DataTableProps<TData, TValue>) {
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableSkeletonLoader
              rows={loaderRowCount}
              tableHeader={table?.getHeaderGroups()?.[0]?.headers}
            />
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="bg-white"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

const TableSkeletonLoader = ({
  rows,
  tableHeader,
}: {
  rows: number;
  tableHeader: any;
}) => {
  return (
    <>
      {Array(rows)
        .fill(null)
        .map((_, index) => (
          <TableRow
            key={index}
            className="border-none hover:bg-transparent dark:hover:bg-transparent"
          >
            {tableHeader?.map((header: any) => (
              <TableCell key={header.id} className="text-center py-4">
                <Skeleton className="h-5 rounded-full w-full" />
              </TableCell>
            ))}
          </TableRow>
        ))}
    </>
  );
};
