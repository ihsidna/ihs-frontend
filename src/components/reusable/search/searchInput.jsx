import React, {useEffect, useState} from 'react';
import SearchResultsPopup from "./SearchResultsPopup";

const SearchInput = ({placeholder, onSearch}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [showResults, setShowResults] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	
	const handleSearch = async () => {
		setIsLoading(true);
		const results = await onSearch(searchTerm);
		setSearchResults(results);
		setShowResults(true);
		setIsLoading(false);
		setSearchTerm("")
	};
	
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};
	
	const closeResults = () => {
		setShowResults(false);
		setSearchResults([]);
	};
	
	useEffect(() => {
		if(searchTerm === ""){
			setIsError(true)
		}else {
			setIsError(false)
		}
	}, [searchTerm]);
	
	return (
		<div className="flex items-center h-10 space-x-2 mt-4">
			<input
				type="text"
				required
				className={`w-full h-full px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ihs-green-shade-500 border border-gray-200 text-gray-500`}
				placeholder={placeholder}
				onChange={handleChange}
				value={searchTerm}
			/>
			<button
				type="button"
				className="bg-ihs-green h-full px-2 text-sm disabled:bg-gray-400 disabled:text-gray-50 disabled:outline-none disabled:border-0"
				onClick={handleSearch}
				disabled={isLoading || isError}
			>
				{isLoading ? "Searching" : "Search"}
			</button>
			
			{showResults && (
				<SearchResultsPopup searchResults={searchResults} closeResults={closeResults} />
			)}
		</div>
	);
};

export default SearchInput;
