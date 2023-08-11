import { ArrTaskType } from './taskType.ts';

type ColumnType = {
	id: number;
	title: string;
	tasks?: ArrTaskType;
};

export type ArrColumnType = ColumnType[];
