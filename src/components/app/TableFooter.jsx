import React, {useEffect} from "react";

const activeButton = "px-4 py-2 text-base font-medium text-gray-100 border-b border-gray-300 bg-ihs-green-shade-600"
const inActiveButton = "p-4 text-base font-medium text-gray-500 border-b border-gray-300 bg-ihs-green-shade-50"

const TableFooter = ({range, setPage, page, slice}) => {
	useEffect(() => {
		if (slice.length < 1 && page !== 1) {
			setPage(page - 1);
		}
	}, [slice, page, setPage]);
	return (
		<div
			className="mt-2 px-6 py-2 font-medium tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-ihs-green-shade-50">
			{range.map((el, index) => (
				<button
					key={index}
					className={`mr-1 ${
						page === el ? activeButton : inActiveButton
					}`}
					onClick={() => setPage(el)}
				>
					{el}
				</button>
			))}
		</div>
	);
};

export default TableFooter;