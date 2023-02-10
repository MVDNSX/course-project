import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../api/API';



export const registerUser = createAsyncThunk(
	'register/registerUser',
	async (regUserData) => {
		const response = await authAPI.regNewUser(regUserData)
		localStorage.setItem('token', response.data.token)
		return response.data
	}
)

const initialState = {
	status: 0
}

// Then, handle actions in your reducers:
const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {

	},
	extraReducers: {
		[registerUser.pending]: (state, action) => {
			state.status = 0
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