import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../api/API';


export const getAuth = createAsyncThunk(
	'users/getAuth',
	async (authUserData) => {
		const response = await authAPI.getAuth(authUserData)
		return response.data;
	}
)

const initialState = {
	authUser: [],
	status: null,
}

// Then, handle actions in your reducers:
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {

	},
	extraReducers: {
		[getAuth.pending]: (state, action) => {
			console.log('loading')
		},
		[getAuth.fulfilled]: (state, action) => {
			console.log('success')
		},
		[getAuth.rejected]: (state, action) => {
			console.log('error')
		},
	}
})

export const { } = authSlice.actions;

export default authSlice.reducer
// Later, dispatch the thunk as needed in the app