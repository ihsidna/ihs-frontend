import React, {createContext, useEffect, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
	const [auth, setAuth] = useState({});
	const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist' )) || true);
	const [loggedInUser, setLoggedInUser] = useState({});
	const [beneficiaries, setBeneficiaries] = useState([]);
	const [services, setServices] = useState([]);
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		setBeneficiaries(JSON.parse(localStorage.getItem("beneficiaries")));
	}, []);

	useEffect(() => {
		setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")))
	}, []);

	useEffect(() => {
		setServices(JSON.parse(localStorage.getItem("services")))
	}, []);

	useEffect(() => {
		setAppointments(JSON.parse(localStorage.getItem("appointments")))
	}, []);

	return (
		<AuthContext.Provider value={{
			auth, setAuth,
			persist, setPersist,
			loggedInUser, setLoggedInUser,
			beneficiaries, setBeneficiaries,
			services, setServices,
			appointments, setAppointments,
		}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;