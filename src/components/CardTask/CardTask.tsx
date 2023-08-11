import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { ArrSubtaskType } from '../../types/taskType.ts';

type CardTaskType = {
	title: string;
	description?: string;
	subtasks?: ArrSubtaskType;
	onClick: () => void;
};

function CardTask({ title, description, subtasks, onClick }: CardTaskType) {
	return (
		<Card sx={{ width: '100%' }} onClick={onClick}>
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
						{`Выполненно подзадач 3 из ${subtasks?.length || 0}`}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default CardTask;
