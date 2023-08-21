export type Tasks = {
	[idTask: number]: {
		idTask: number;
		title: string;
		description: string;
		subtasks: number[];
	};
};
