import React from 'react';

const Unauthorized = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center py-4 md:py-56 pt-44 pb-20 relative">
				<p className="md:text-4xl text-2xl text-ihs-green py-2">You are not authorized to access this page</p>
			</div>
		</>
	);
};

export default Unauthorized;