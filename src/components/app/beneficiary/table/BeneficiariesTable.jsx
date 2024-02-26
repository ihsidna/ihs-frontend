import { Link } from "react-router-dom";
import { avatar } from "../../../../data/enums";
import TopBarProgress from "react-topbar-progress-indicator";
import { calculateAge } from "../../../../hooks/useCalculateAge";
import BaseTable from "../../../table/BaseTable";
import Avatar from "react-avatar";

TopBarProgress.config({
  barColors: {
    0: "#05afb0",
  },
  shadowBlur: 5,
});

const BeneficiariesTable = ({ beneficiaries }) => {
  const rowsPerPage = 10;

  // Array of table headings for the mobile view
  const mobileScreenHeaders = ["Beneficiaries"];

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
      header: "BENEFICIARY",
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      cell: (cell) => (
        <p className="capitalize text-lg md:text-base font-semibold md:font-normal">{`${cell.getValue()}`}</p>
      ),
    },
    {
      header: "RELATIONSHIP",
      accessorKey: "relationship",
      cell: (cell) => (
        <p className="capitalize flex justify-between">
          <span className="md:hidden">Relationship:</span>
          <span className="font-semibold md:font-normal">
            {" "}
            {`${cell.getValue()}`}
          </span>
        </p>
      ),
    },
    {
      header: "LOCATION",
      accessorKey: "address",
      cell: (cell) => (
        <p className="capitalize flex justify-between">
          <span className="md:hidden">Address:</span>
          <span className="font-semibold md:font-normal">
            {" "}
            {`${cell.getValue()}`}
          </span>
        </p>
      ),
    },
    {
      header: "AGE",
      accessorFn: (row) => calculateAge(row.dob),
      cell: (cell) => (
        <p className="capitalize flex justify-between">
          <span className="md:hidden">Age:</span>
          <span className="lowercase font-semibold md:font-normal">
            {" "}
            {`${cell.getValue()}`} years
          </span>
        </p>
      ),
    },

    {
      header: "ACTIONS",
      accessorKey: "actions",
      cell: (cell) => (
        <Link
          className="text-ihs-green"
          to={`/beneficiaries/viewbeneficiary/${cell.row.original.id}`}
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <>
      <BaseTable
        data={beneficiaries}
        columns={columns}
        rowsPerPage={rowsPerPage}
        actionBaseUrl={"viewbeneficiary/"}
        options={{
          mobileScreenHeaders: mobileScreenHeaders,
        }}
        tableTitle={"Beneficiary"}
      />
    </>
  );
};

export default BeneficiariesTable;
