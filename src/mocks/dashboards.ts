import { Boards } from '../types/boardType.ts';
import { Columns } from '../types/columnType.ts';
import { Subtasks } from '../types/subtaskType.ts';
import { Tasks } from '../types/taskType.ts';

type InitialStateType = {
	activeBoard: number;
	boards: Boards;
	columns: Columns;
	tasks: Tasks;
	subtasks: Subtasks;
};
export const initialState: InitialStateType = {
	activeBoard: 0,
	boards: {
		0: { id: 0, title: 'Personal Goals', columns: [0, 1] },
		1: { id: 1, title: 'Professional Goals', columns: [2, 3] }
	},
	columns: {
		0: { id: 0, title: 'Short-Term Goals', tasks: [0, 1] },
		1: { id: 1, title: 'Long-Term Goals', tasks: [2] },
		2: { id: 2, title: 'Current Projects', tasks: [3] },
		3: { id: 3, title: 'Future Endeavors', tasks: [4, 5] }
	},
	tasks: {
		0: {
			idTask: 0,
			title: 'Learn Spanish',
			description: 'Complete an online course and practice speaking.',
			subtasks: [0, 1]
		},
		1: {
			idTask: 1,
			title: 'Read 5 Books',
			description: 'Focus on self-improvement and fiction.',
			subtasks: [2, 3]
		},
		2: {
			idTask: 2,
			title: 'Travel to Japan',
			description: 'Plan a two-week trip exploring Tokyo, Kyoto, and Osaka.',
			subtasks: [4, 5]
		},
		3: {
			idTask: 3,
			title: 'Finish Current Project',
			description: 'Ensure all milestones are met on time.',
			subtasks: [6]
		},
		4: { idTask: 4, title: 'Attend a Professional Workshop', description: '', subtasks: [] },
		5: {
			idTask: 5,
			title: 'Get a Certification',
			description: 'Research relevant certifications in the field.',
			subtasks: [7]
		}
	},
	subtasks: {
		0: { id: 0, done: false, title: 'Sign up for a course' },
		1: { id: 1, done: true, title: 'Practice daily' },
		2: { id: 2, done: true, title: 'Choose the first book' },
		3: { id: 3, done: false, title: 'Set aside reading time' },
		4: { id: 4, done: false, title: 'Research best travel spots' },
		5: { id: 5, done: false, title: 'Book flights and accommodations' },
		6: { id: 6, done: false, title: 'Review project timeline' },
		7: { id: 7, done: false, title: 'Enroll in a certification course' }
	}
};
