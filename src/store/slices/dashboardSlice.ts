import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../mocks/dashboards.ts';

const dashboardSlice = createSlice({
	name: 'dashboardSlice',
	initialState,
	reducers: {
		setActiveBoard: (state, action) => {
			state.activeBoard = action.payload;
		},
		addBoard: (state, action) => {
			state.boards[action.payload.id] = action.payload;
		},
		addColumn: (state, action) => {
			const newColumn = action.payload;
			state.columns[newColumn.id] = newColumn;
		},
		addIdForColumn: (state, action) => {
			state.boards[state.activeBoard].columns.push(action.payload);
		},
		dndTask: (state, action) => {
			console.log(action.payload);
			state.columns[action.payload.idColumn].tasks.filter(item => item === action.payload.idTask);
			state.columns[action.payload.idColumn].tasks.push(action.payload.idTask);
		}
	}
});
export const { setActiveBoard, addBoard, addColumn, addIdForColumn, dndTask } =
	dashboardSlice.actions;
export default dashboardSlice.reducer;
