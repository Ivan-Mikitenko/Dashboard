import { configureStore } from '@reduxjs/toolkit';
import dashboard from './slices/dashboardSlice.ts';
import authorization from './slices/authorizationSlice.ts';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
	reducer: { dashboard, authorization }
});

export default store;
