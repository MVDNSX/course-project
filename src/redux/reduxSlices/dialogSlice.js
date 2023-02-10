import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { dialogAPI } from '../../api/API'


export const createDialog = createAsyncThunk(
	'dialogs/createDialog',
	async (withUserData) => {
		const response = await dialogAPI.createDialog(withUserData);
		return response.data;
	}
)

export const getDialogs = createAsyncThunk(
	'dialogs/getDialogs',
	async () => {
		const response = await dialogAPI.getDialogs();
		return response.data;
	}
)

const initialState = {
	dialogs: [],
}

// Then, handle actions in your reducers:
const dialogSlice = createSlice({
	name: 'dialogs',
	initialState,
	reducers: {
		clearChats: (state) => {
			state.dialogs = []
		}
	},
	extraReducers: {
		[createDialog.pending]: (state) => {
		},
		[createDialog.fulfilled]: (state, action) => {
		},
		[createDialog.rejected]: () => {
			console.log('error')
		},

		[getDialogs.pending]: (state) => {
			state.dialogs = [];
		},
		[getDialogs.fulfilled]: (state, action) => {
			state.dialogs = action.payload.dialogs
		},
		[getDialogs.rejected]: () => {
			console.log('error')
		},
	}

})

export const { clearChats } = dialogSlice.actions;

export default dialogSlice.reducer
// Later, dispatch the thunk as needed in the app