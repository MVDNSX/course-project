import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../api/API';


export const registerUser = createAsyncThunk(
	'register/registerUser',
	async (authUserData) => {
		const response = await authAPI.regNewUser(authUserData)
		return response.data
	}
)

const initialState = {
	status: []
}

// Then, handle actions in your reducers:
const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {

	},
	extraReducers: {
		[registerUser.pending]: (state, action) => {
			console.log('loading')
		},
		[registerUser.fulfilled]: (state, action) => {
			state.status = action.payload.status
			console.log('success')
		},
		[registerUser.rejected]: (state, action) => {
			console.log('error')
		},
	}
})

export const { } = registerSlice.actions;

export default registerSlice.reducer
// Later, dispatch the thunk as needed in the app