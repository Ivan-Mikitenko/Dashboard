import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dashboards } from '../../../mocks/dashboards.ts';
import { ArrBoardType, BoardType } from '../../../types/boardType.ts';

export type initialStateType = {
	quantityBoards: number;
	activeBoard: number;
	boards: ArrBoardType;
};

const initialState: initialStateType = {
	quantityBoards: 2,
	activeBoard: 0,
	boards: dashboards
};

const dashboardSlice = createSlice({
	name: 'dashboardSlice',
	initialState,
	reducers: {
		setNewBoard: (state, action: PayloadAction<BoardType>) => {
			state.boards.push(action.payload);
			state.quantityBoards += 1;
		},
		setActiveBoard: (state, action: PayloadAction<number>) => {
			state.activeBoard = action.payload;
		},
		setNewColumn: (state, action: PayloadAction<{ title: string; id: number }>) => {
			const columnsBoard = state.boards[state.activeBoard].columns;
			columnsBoard.push(action.payload);
		},
		setNewTask: (state, action) => {
			const { task, columnId } = action.payload;
			const column = state.boards[state.activeBoard].columns.find(col => col.id === columnId);

			if (column) {
				if (!column.tasks) {
					column.tasks = [];
				}
				column.tasks.push(task);
			}
		},
		setChangeTitle: (state, action: PayloadAction<{ index: number; title: string }>) => {
			const { index, title } = action.payload;
			state.boards[state.activeBoard].columns[index].title = title;
		},
		setDoneSubtask: (
			state,
			action: PayloadAction<{
				ColumnIndex: number;
				taskIndex: number;
				subIndex: number;
				done: boolean;
			}>
		) => {
			const { ColumnIndex, taskIndex, subIndex, done } = action.payload;

			const task = state.boards[state.activeBoard].columns[ColumnIndex].tasks[taskIndex];
			if (task && task.subtasks) {
				task.subtasks[subIndex].done = done;
			}
		}
	}
});

export const {
	setNewBoard,
	setActiveBoard,
	setNewColumn,
	setNewTask,
	setChangeTitle,
	setDoneSubtask
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
