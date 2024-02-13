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
        <p className="capitalize text-lg md:text-base font-semibold md:font-normal text-gray-700">{`${cell.getValue()}`}</p>
      ),
    },
    {
      header: "CATEGORY",
      accessorKey: "category",
      cell: (cell) => (
        <p className="capitalize flex justify-between text-gray-500">
          <span className="font-semibold md:hidden">Category:</span>
          <span className="capitalize font-normal">{`${cell.getValue()}`}</span>
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
