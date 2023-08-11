import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { setChangeTitle } from '../../store/slices/data/dashboardSlice.ts';
import { TextField } from '@mui/material';
import CardTaskDetails from '../CardTaskDetails/CardTaskDetails.tsx';

type DashboardColumn = {
	titleColumn: string;
	quantities: number;
	index: number;
};

function DashboardColumn({ titleColumn, quantities, index }: DashboardColumn) {
	const { boards, activeBoard } = useSelector((store: RootState) => store.dashboard);
	const tasks = boards[activeBoard].columns[index].tasks;

	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(titleColumn);

	const handleTitleClick = () => {
		setIsEditing(true);
	};

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditedTitle(e.target.value);
	};

	const handleTitleBlur = () => {
		setIsEditing(false);

		if (titleColumn !== editedTitle) {
			dispatch(setChangeTitle({ index, title: editedTitle }));
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.keyCode === 13) {
			dispatch(setChangeTitle({ index, title: editedTitle }));
			setIsEditing(false);
		}
	};

	return (
		<Box sx={{ width: '400px', flexShrink: 0, p: 2 }}>
			<Box sx={{ display: 'flex', gap: '10px', mb: 3, height: '48px' }}>
				<CircleIcon sx={{ mt: '4px' }} color='warning' />
				{isEditing ? (
					<TextField
						value={editedTitle}
						onChange={handleTitleChange}
						onBlur={handleTitleBlur}
						onKeyDown={handleKeyDown}
						autoFocus
						id='standard-basic'
						variant='standard'
						fullWidth={true}
					/>
				) : (
					<Typography
						variant='h5'
						fontWeight='500'
						sx={{ mb: 2, cursor: 'pointer', width: '100%' }}
						onClick={handleTitleClick}>
						{`${editedTitle} (${quantities})`}
					</Typography>
				)}
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{tasks?.map(item => <CardTaskDetails key={item.idTask} {...item} ColumnIndex={index} />)}
			</Box>
		</Box>
	);
}

export default DashboardColumn;
