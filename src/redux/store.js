import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice";
import beneficiaryReducer from "../redux/features/beneficiarySlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
	key: 'root',
	storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		userBeneficiaries: beneficiaryReducer,
	},
	middleware: [thunk]
});

export const persistor = persistStore(store)
