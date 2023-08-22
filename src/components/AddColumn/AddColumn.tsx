import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { useEffect, useRef, useState } from 'react';
import { addColumn, addIdForColumn } from '../../store/slices/dashboardSlice.ts';

function AddColumn() {
	const { columns } = useSelector((store: RootState) => store.dashboard);
	const dispatch = useDispatch();
	const [maxIdColumn, setMaxIdColumn] = useState(
		Math.max(...Object.values(columns).map(column => column.id)) + 1
	);
	const column = useRef({ id: maxIdColumn, title: '', tasks: [] });

	useEffect(() => {
		column.current = { id: maxIdColumn, title: '', tasks: [] };
	}, [maxIdColumn]);

	return (
		<Box
			onClick={() => {
				dispatch(addColumn(column.current));
				setMaxIdColumn(prevId => prevId + 1);
				dispatch(addIdForColumn(column.current.id));
			}}
			sx={{
				cursor: 'pointer',
				background: 'rgb(233, 239, 300)',
				width: '300px',
				flexShrink: 0,
				p: 2,
				display: 'flex',
				gap: '10px',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '10px'
			}}>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<AddCircleOutlineIcon fontSize='large' sx={{ color: 'grey' }} />
				<Typography variant='h5' fontWeight='500' sx={{ mb: 2, letterSpacing: '1px' }} color='grey'>
					New Column
				</Typography>
			</Box>
		</Box>
	);
}

export default AddColumn;
