import { configureStore } from '@reduxjs/toolkit';
import dashboard, { initialStateType } from './slices/data/dashboardSlice.ts';

export type RootState = {
	dashboard: initialStateType;
};

const store = configureStore({
	reducer: { dashboard }
});

export default store;
