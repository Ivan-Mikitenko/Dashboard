import { ArrBoardType } from '../types/boardType.ts';

export const dashboards: ArrBoardType = [
	{
		title: 'First dashboard',
		columns: [
			{
				title: 'Задачи на сегодня',
				id: 0,
				tasks: [
					{
						idTask: 0,
						title: 'Заработать миллиард',
						description: 'Найти какую то тему',
						subtasks: [
							{
								done: false,
								title: 'Открыть бизнес'
							},
							{
								done: true,
								title: 'Посадить дерево'
							}
						]
					}
				]
			},
			{ title: 'Задачи на завтра', id: 1 }
		]
	},
	{
		title: 'Second dashboard',
		columns: [
			{ title: 'Цель на неделю', id: 0 },
			{
				title: 'Цель на год',
				id: 1,
				tasks: [
					{
						idTask: 0,
						title: 'Пройти два раза ironMan',
						description: ''
					},
					{
						idTask: 1,
						title: 'Слетать на луну',
						description: ''
					}
				]
			} // Слетать на луну
		]
	}
];
