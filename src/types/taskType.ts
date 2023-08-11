type taskType = {
	idTask: number;
	title: string;
	description: string;
	subtasks?: ArrSubtaskType;
};

export type SubtaskType = {
	done: boolean;
	title: string;
};

export type ArrSubtaskType = SubtaskType[];
export type ArrTaskType = taskType[];
