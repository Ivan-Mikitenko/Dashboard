import { configureStore } from '@reduxjs/toolkit';
import dashboard from './slices/dashboardSlice.ts';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
	reducer: { dashboard }
});

export default store;
