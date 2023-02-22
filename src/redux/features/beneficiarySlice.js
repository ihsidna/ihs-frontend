import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {axiosPrivate} from "../../api/axios";

const initialState = {
	beneficiaries: []
}

export const fetchBeneficiaries = createAsyncThunk('user/beneficiaries', async () => {
	try {
		const response = await axiosPrivate.get('/user/beneficiaries');

		return response.data.data

	} catch (err){
		console.error(err)
	}

})

const beneficiarySlice = createSlice({
	name: 'beneficiaries',
	initialState,
	reducers: {
		storeBeneficiaries(state, action) {
			state.beneficiaries = action.payload
		},
	},
})

export const { storeBeneficiaries } = beneficiarySlice.actions

export default beneficiarySlice.reducer