import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import CardTaskDetailsMemo from '../CardTaskDetails/CardTaskDetails.tsx';
import { useDrop } from 'react-dnd';
import { addBoard, dndTask } from '../../store/slices/dashboardSlice.ts';

type DashboardColumnType = {
	title: string;
	activeTasks: number[];
	id: number;
};
function DashboardColumn({ title, activeTasks, id }: DashboardColumnType) {
	const { tasks } = useSelector((store: RootState) => store.dashboard);
	const dispatch = useDispatch();
	const arrTasks = Object.values(tasks);
	const activeTasksObject = arrTasks.filter(item => activeTasks.includes(item.idTask));

	const [{ isOver }, dropRef] = useDrop({
		accept: 'CARD',
		drop: item => {
			console.log('Dropped card:', item);
			console.log('Dropped column:', id, title);
			dispatch(dndTask({ idTask: item.id, idColumn: id }));
		},
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	});

	return (
		<Box
			ref={dropRef}
			sx={{
				width: '400px',
				flexShrink: 0,
				p: 2,
				borderRadius: '20px',
				outline: isOver ? '2px dashed #6363C7' : 'none',
				backgroundColor: isOver ? 'rgba(99, 99, 199, 0.2)' : 'none'
			}}>
			<Box sx={{ display: 'flex', gap: '10px', mb: 3, height: '48px' }}>
				<CircleIcon sx={{ mt: '4px' }} color='warning' />
				<Typography variant='h5' fontWeight='500' sx={{ mb: 2, cursor: 'pointer', width: '100%' }}>
					{`${title.length === 0 ? 'Click to change name' : title} (${activeTasksObject.length})`}
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px'
				}}>
				{activeTasksObject.map(item => (
					<CardTaskDetailsMemo
						key={item.idTask}
						title={item.title}
						description={item.description}
						subtasksId={item.subtasks}
						id={item.idTask}
					/>
				))}
			</Box>
		</Box>
	);
}

export default DashboardColumn;
