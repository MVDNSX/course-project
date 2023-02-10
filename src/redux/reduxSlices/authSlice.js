import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../api/API';
import jwt from 'jwt-decode'


export const getAuth = createAsyncThunk(
	'users/getAuth',
	async (authUserData) => {
		const response = await authAPI.getAuth(authUserData)
		localStorage.setItem('token', response.data.token)
		return response.data
	}
)

export const getCheck = createAsyncThunk(
	'users/getCheck',
	async () => {
		const response = await authAPI.getCheck()
		localStorage.setItem('token', response.data.token)
		return response.data
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
		logOut: (state) => {
			state.status = null;
			state.authUser = []
			localStorage.clear()
		}
	},
	extraReducers: {
		[getAuth.pending]: (state, action) => {
			console.log('loading')
		},
		[getAuth.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.authUser = jwt(action.payload.token)
			console.log('success')
		},
		[getAuth.rejected]: (state, action) => {
			console.log('error')
		},

		[getCheck.pending]: (state, action) => {
			state.status = null
			state.authUser = []
			localStorage.clear()
			console.log('loading')
		},
		[getCheck.fulfilled]: (state, action) => {
			state.status = action.payload.status
			state.authUser = jwt(action.payload.token)
			console.log('success')
		},
		[getCheck.rejected]: (state, action) => {
			console.log('error')
		},
	}
})

export const { logOut } = authSlice.actions;

export default authSlice.reducer
// Later, dispatch the thunk as needed in the app