import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { useState } from 'react';
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

	const handleTitleClick = () => {
		setIsEditing(true);
	};

	return (
		<Box sx={{ width: '400px', flexShrink: 0, p: 2 }}>
			<Box sx={{ display: 'flex', gap: '10px', mb: 3, height: '48px' }}>
				<CircleIcon sx={{ mt: '4px' }} color='warning' />
				{isEditing ? (
					<TextField
						value={titleColumn}
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
						{`${titleColumn} (${quantities})`}
					</Typography>
				)}
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{tasks?.map(item => (
					<CardTaskDetails key={item.idTask} {...item} columnIndex={index} idTask={item.idTask} />
				))}
			</Box>
		</Box>
	);
}

export default DashboardColumn;
