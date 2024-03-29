import {useEffect, useState} from "react";

const calculateRange = (data, rowsPerPage) => {
	const range = [];
	const num = Math.ceil(data.length / rowsPerPage);
	// eslint-disable-next-line no-unused-vars

	for (let i = 1; i <= num; i++) {
		range.push(i);
	}
	return range;
};

const sliceData = (data, page, rowsPerPage) => {
	return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) => {
	const [tableRange, setTableRange] = useState([]);
	const [slice, setSlice] = useState([]);

	useEffect(() => {
		const range = calculateRange(data, rowsPerPage);
		setTableRange([...range]);

		const slice = sliceData(data, page, rowsPerPage);
		setSlice([...slice]);
		// eslint-disable-next-line
	}, [data, setTableRange, page, setSlice]);

	return {slice, range: tableRange};
};

export default useTable;