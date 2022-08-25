import React, {createContext, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
	const [auth, setAuth] = useState({});
	const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist' )) || true);
	const [loggedInUser, setLoggedInUser] = useState({});
	const [beneficiaries, setBeneficiaries] = useState([]);

	return (
		<AuthContext.Provider value={{auth, setAuth, persist, setPersist, loggedInUser, setLoggedInUser, beneficiaries, setBeneficiaries}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;