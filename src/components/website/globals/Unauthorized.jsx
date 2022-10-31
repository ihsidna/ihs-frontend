import React from 'react';

const Unauthorized = () => {
	return (
		<>
			<div className="flex justify-center items-center lg:py-60 py-32">
				<p className="md:text-2xl text-lg text-ihs-green py-2 px-10 text-center">You are not authorized to access this page</p>
			</div>
		</>
	);
};

export default Unauthorized;