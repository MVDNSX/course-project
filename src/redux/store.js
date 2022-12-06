import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./reduxSlices/usersSlice"

export const store = configureStore({
	reducer: {
		users: usersSlice,
	},
})