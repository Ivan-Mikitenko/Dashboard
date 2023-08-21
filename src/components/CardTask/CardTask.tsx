import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useDrag } from 'react-dnd';
import { Subtasks } from '../../types/subtaskType.ts';

type CardTaskType = {
	title: string;
	description?: string;
	subtasks?: Subtasks[];
	onClick: () => void;
	id: number;
};

function CardTask({ title, description, subtasks, onClick, id }: CardTaskType) {
	const [{ isDragging }, dragRef] = useDrag({
		type: 'CARD',
		item: { id: id },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});

	const completedSubtasks = subtasks ? subtasks.filter((item: { done: boolean }) => item.done) : 0;

	return (
		<Card ref={dragRef} sx={{ width: '100%', opacity: isDragging ? 0.5 : 1 }} onClick={onClick}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5'>
						{title}
					</Typography>
					{description && (
						<Typography gutterBottom variant='subtitle1'>
							{description}
						</Typography>
					)}
					<Typography variant='body2' color='text.secondary'>
						{subtasks.length !== 0
							? `Выполненно подзадач ${completedSubtasks.length} из ${subtasks.length}`
							: ''}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default CardTask;
