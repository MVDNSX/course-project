import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userAPI } from '../../api/API'


export const getSearchUser = createAsyncThunk(
	'search/getSearch',
	async (username) => {
		const response = await userAPI.searchUser(username);
		return response.data;
	}
)

const initialState = {
	resultSearch: [],
}

// Then, handle actions in your reducers:
const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		clearSearch: (state) => {
			state.resultSearch = [];
		}
	},
	extraReducers: {
		[getSearchUser.pending]: (state) => {
			state.resultSearch = []
		},
		[getSearchUser.fulfilled]: (state, action) => {
			state.resultSearch = action.payload
		},
		[getSearchUser.rejected]: () => {
			console.log('error')
		},
	}
})

export const { clearSearch } = searchSlice.actions;

export default searchSlice.reducer
// Later, dispatch the thunk as needed in the app