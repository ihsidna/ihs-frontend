import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { avatar } from "../../../../data/enums";
import BaseTable from "../../../table/BaseTable";

const HealthWorkerTable = ({ healthWorkers }) => {
  const rowsPerPage = 10;

  const mobileScreenHeaders = ["Health Workers"];

  const columns = [
    {
      header: " ", // do not remove the space in between the string
      cell: (cell) => (
        <span className="hidden sm:block px-0">
          <Avatar
            name={`${cell.row.original?.firstName} ${cell.row.original?.lastName}`}
            color={avatar.BackgroundColor}
            fgColor={avatar.ForegroundColor}
            size={avatar.width}
            round={true}
          />
        </span>
      ),
    },
    {
      header: "NAME",
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      cell: (cell) => (
        <p className="capitalize text-base md:text-base font-semibold md:font-normal">{`${cell.getValue()}`}</p>
      ),
    },
    {
      header: "EMAIL",
      accessorKey: "email",
      cell: (cell) => (
        <p className="flex justify-between">
          <span className="font-semibold md:hidden">Email:</span>
          <span className="font-normal"> {`${cell.getValue()}`}</span>
        </p>
      ),
    },
    {
      header: "PHONE",
      accessorKey: "phone",
      cell: (cell) => (
        <p className="flex justify-between">
          <span className="font-semibold md:hidden">Phone:</span>
          <span className="md:font-normal"> {`${cell.getValue()}`}</span>
        </p>
      ),
    },
    {
      header: "ACTIONS",
      accessorKey: "actions",
      cell: (cell) => (
        <Link
          className="text-ihs-green"
          to={`/healthworkers/viewhealthworker/${cell.row.original.id}`}
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <>
      <BaseTable
        data={healthWorkers}
        columns={columns}
        rowsPerPage={rowsPerPage}
        actionBaseUrl={"viewhealthworker/"}
        options={{
          mobileScreenHeaders: mobileScreenHeaders,
        }}
        tableTitle={"Health Worker"}
      />
    </>
  );
};

export default HealthWorkerTable;
