import React from 'react';
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const ScrollToTop = (props) => {
	const location = useLocation();

	// eslint-disable-next-line no-unused-expressions
	useEffect(() => {
		window.scrollTo(0, 0);
	}), [location];

	return (
		<>
			{props.children}
		</>
	);
};

export default ScrollToTop;