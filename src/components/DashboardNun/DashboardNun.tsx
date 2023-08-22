import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GppBadTwoToneIcon from '@mui/icons-material/GppBadTwoTone';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

function DashboardNun() {
	const { activeBoard } = useSelector((store: RootState) => store.dashboard);

	return (
		<Box sx={{ display: 'flex', gap: '10px', height: '100px' }}>
			<GppBadTwoToneIcon fontSize='medium' sx={{ color: 'grey', mt: '4px' }} />
			<Typography variant='h5' fontWeight='500' sx={{ mb: 2 }} color='grey'>
				{activeBoard === null ? 'Добавь свой первый dashboard' : 'Пока что тут пусто'}
			</Typography>
		</Box>
	);
}

export default DashboardNun;
