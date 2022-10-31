import React from 'react';
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
	return (
		<CookieConsent
			style={{
				backgroundColor: "#F5F5F5",
				alignItems: "center",
				boxSizing: "border-box",
				padding: "5px",
				border: "solid 1px rgb(71 85 105)",
				borderRadius: "5px",
				marginLeft: "10px",
				marginBottom: "10px",
				// marginRight: "10px",
				width: "95%",
				borderStyle: "solid 1px",
			}}
			buttonStyle={{borderRadius: "5px", backgroundColor: "rgb(5 175 176)", color:"#fff", }}
			declineButtonStyle={{borderRadius: "5px", backgroundColor: "rgb(71 85 105)", color:"#fff", }}
			enableDeclineButton flipButtons declineButtonText="Decline" buttonText="I Understand" cookieName="ihsCookieConsent" expires={7}
		>
			<div className="text-slate-600">
				<p className="text-lg font-semibold">We use cookies.</p>
				<p className="text-sm font-thin w-[90%]">This website uses cookies to ensure you get the best experience. By clicking I Understand, you agree to us storing
					and accessing cookies on your device. <a href="/privacy-policy" className="underline"> Privacy Policy</a>.</p>
			</div>
		</CookieConsent>
	);
};

export default Cookie;