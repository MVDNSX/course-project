import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./reduxSlices/usersSlice"
import registerSlice from "./reduxSlices/registerSlice"
import authSlice from "./reduxSlices/authSlice"
import searchSlice from "./reduxSlices/searchSlice"
import dialogSlice from "./reduxSlices/dialogSlice"
export const store = configureStore({
	reducer: {
		users: usersSlice,
		reg: registerSlice,
		auth: authSlice,
		search: searchSlice,
		dialogs: dialogSlice
	},
})