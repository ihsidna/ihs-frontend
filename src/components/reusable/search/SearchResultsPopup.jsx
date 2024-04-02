import React from 'react';
import {useNavigate} from "react-router-dom";
import {capitalizeString} from "../../../utils/capitalizeString";
import {ArrowRightIcon} from "@heroicons/react/outline";


const SearchResultsPopup = ({searchResults, closeResults}) => {
	const navigate = useNavigate();
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{marginLeft: "0px"}}>
			<div className="bg-white p-4 rounded-lg lg:w-1/3 md:w-1/2 w-full mx-4">
				<div className='flex justify-between items-center mb-4'>
					<h2 className="text-base font-semibold">Search Results</h2>
					<button
						type="button"
						className="bg-ihs-green p-2 text-sm"
						onClick={closeResults}
					>
						Close
					</button>
				</div>
				{searchResults?.length > 0 ? (
					<div>
						{searchResults.map((result) => (
							<div
								key={result.id}
								onClick={() => navigate(`viewuser/${result.id}`)}
								className="cursor-pointer hover:bg-ihs-green-shade-50 p-2 rounded-md even:bg-gray-100"
							>
								<div className="flex justify-between items-center py-2">
									<p className="text-gray-500 text-base">{capitalizeString(result.firstName)} {capitalizeString(result.lastName)}</p>
									<ArrowRightIcon className="w-4 h-4 m-0 text-gray-500"/>
								</div>
							</div>
						))}
					</div>
				) : (
					<p>No results found.</p>
				)}
			</div>
		</div>
	);
};

export default SearchResultsPopup;
