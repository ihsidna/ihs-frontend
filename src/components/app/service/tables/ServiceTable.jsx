import { Link } from "react-router-dom";
import BaseTable from "../../../table/BaseTable";

const ServiceTable = ({ services }) => {
  const rowsPerPage = 10; // number of healthWorkers per page
  const mobileScreenHeaders = ["Services"];

  const columns = [
    {
      header: "NAME",
      accessorKey: "name",
      cell: (cell) => (
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold capitalize md:text-base md:font-normal">{`${cell.getValue()}`}</p>

          <span className="block text-xs font-light md:hidden text-ihs-green">View</span>
        </div>
      ),
    },
    {
      header: "CATEGORY",
      accessorKey: "category",
      cell: (cell) => (
        <p className="flex justify-between text-gray-500 capitalize">
          <span className="font-medium md:hidden">Category:</span>
          <span className="font-normal capitalize">{`${cell.getValue()}`}</span>
        </p>
      ),
    },
    {
      header: "ACTIONS",
      accessorKey: "actions",
      cell: (cell) => (
        <Link
          className="text-ihs-green"
          to={`viewservice/${cell.row.original.id}`}
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <>
      <BaseTable
        data={services}
        columns={columns}
        rowsPerPage={rowsPerPage}
        actionBaseUrl={"viewservice/"}
        options={{
          mobileScreenHeaders: mobileScreenHeaders,
        }}
        tableTitle={"Service"}
      />
    </>
  );
};

export default ServiceTable;
