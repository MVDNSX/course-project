import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../api/API'


export const getUsers = createAsyncThunk(
	'users/getUsers',
	async () => {
		const response = await authAPI.getCheck();
		localStorage.setItem('token', response.data.token)
		return response.data;
	}
)

const initialState = {
	users: [],
	status: null,
}

// Then, handle actions in your reducers:
const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
	},
	extraReducers: {
		[getUsers.pending]: (state) => {
			state.users = []
		},
		[getUsers.fulfilled]: (state, action) => {
			//state.users = []
			//state.users.push(...action.payload.map(({ id, username, email }) => ({ id, username, email })))
		},
		[getUsers.rejected]: () => {
			console.log('error')
		},
	}
})

export const { } = usersSlice.actions;

export default usersSlice.reducer
// Later, dispatch the thunk as needed in the app