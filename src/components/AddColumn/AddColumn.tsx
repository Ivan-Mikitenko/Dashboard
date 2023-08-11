import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { setNewColumn } from '../../store/slices/data/dashboardSlice.ts';
import { RootState } from '../../store/store.ts';

function AddColumn() {
	const dispatch = useDispatch();
	const { boards } = useSelector((store: RootState) => store.dashboard);

	const obj = { title: 'Кликни на заголовок', id: boards.length + 1 };

	return (
		<Box
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
			}}
			onClick={() => dispatch(setNewColumn(obj))}>
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
