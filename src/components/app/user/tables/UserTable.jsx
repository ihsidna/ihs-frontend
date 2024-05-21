import Avatar from "react-avatar";
import { avatar, userRoles } from "../../../../data/enums";
import { Link } from "react-router-dom";
import BaseTable from "../../../table/BaseTable";

const UsersTable = ({ users }) => {
  const rowsPerPage = 10; // number of users per page

  const mobileScreenHeaders = ["User"];

  const columns = [
    {
      header: " ", // do not remove the space in between the string
      cell: (cell) => (
        <span className="hidden sm:block px-0">
          <Avatar
            name={`${cell.row.original.firstName} ${cell.row.original.lastName}`}
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
      cell: (cell) => <p className={`capitalize ${cell.row.original.accountActive === false ? "text-red-500" : ""}`}>{`${cell.getValue()}`}
      </p>,
    },
    {
      header: "EMAIL",
      accessorKey: "email",
    },
    {
      header: "PHONE",
      accessorKey: "phone",
    },
    {
      header: "ROLE",
      accessorKey: "userType",
      cell: (cell) => (
        <span
          className={`px-2 py-1 break-normal capitalize rounded text-xs ${
            cell.getValue() === userRoles.Admin
              ? "text-green-900 bg-green-100"
              : cell.getValue() === userRoles.Employee
              ? "text-blue-900 bg-blue-100"
              : "text-amber-900 bg-amber-100"
          }`}
        >
          {cell.getValue()}
        </span>
      ),
    },
    {
      header: "ACTIONS",
      accessorKey: "actions",
      cell: (cell) => (
        <Link
          className="text-ihs-green"
          to={`viewuser/${cell.row.original.id}`}
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <BaseTable
      data={users}
      columns={columns}
      rowsPerPage={rowsPerPage}
      actionBaseUrl={"viewuser/"}
      options={{
        positionedColumn: "userType",
        mobileScreenHeaders: mobileScreenHeaders,
      }}
      tableTitle={"User"}
    />
  );
};

export default UsersTable;
