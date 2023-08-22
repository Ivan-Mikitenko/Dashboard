import { createSlice } from '@reduxjs/toolkit';

const initialStateUser = {
	email: null,
	token: null,
	id: null
};

const authorizationSlice = createSlice({
	name: 'authorizationSlice',
	initialState: initialStateUser,
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
		}
	}
});

export const { setUser } = authorizationSlice.actions;
export default authorizationSlice.reducer;
