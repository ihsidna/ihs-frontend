import { Link } from "react-router-dom";
import { avatar } from "../../../../data/enums";
import TopBarProgress from "react-topbar-progress-indicator";
import { calculateAge } from "../../../../hooks/useCalculateAge";
import BaseTable from "../../../table/BaseTable";
import Avatar from "react-avatar";
import { truncate } from "../../../../utils/utililtyFunctions";

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
        <span className="hidden px-0 sm:block">
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
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold capitalize md:text-base md:font-normal">{`${cell.getValue()}`}</p>

          <span className="block text-xs font-light md:hidden text-ihs-green">View</span>
        </div>
        
      ),
    },
    {
      header: "RELATIONSHIP",
      accessorKey: "relationship",
      cell: (cell) => (
        <p className="flex justify-between">
          <span className="font-medium md:hidden">Relationship:</span>
          <span className="font-normal">
            {`${cell.getValue()}`}
          </span>
        </p>
      ),
    },
    {
      header: "LOCATION",
      accessorKey: "address",
      cell: (cell) => (
        <p className="flex justify-between">
          <span className="font-medium md:hidden">Address:</span>
          <span className="font-normal lg:hidden">
            {" "}
            {`${truncate(cell.getValue(), 26)}`}
          </span>
          <span className="hidden font-normal lg:block">
            {" "}
            {`${truncate(cell.getValue(), 40)}`}
          </span>
        </p>
      ),
    },
    {
      header: "AGE",
      accessorFn: (row) => calculateAge(row.dob),
      cell: (cell) => (
        <p className="flex justify-between">
          <span className="font-medium md:hidden">Age:</span>
          <span className="font-normal">
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
        actionBaseUrl={"/beneficiaries/viewbeneficiary/"}
        options={{
          mobileScreenHeaders: mobileScreenHeaders,
        }}
        tableTitle={"Beneficiary"}
      />
    </>
  );
};

export default BeneficiariesTable;
