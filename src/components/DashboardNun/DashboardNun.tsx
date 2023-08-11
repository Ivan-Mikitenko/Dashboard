import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GppBadTwoToneIcon from '@mui/icons-material/GppBadTwoTone';

function DashboardNun() {
	return (
		<Box sx={{ display: 'flex', gap: '10px', height: '100px' }}>
			<GppBadTwoToneIcon fontSize='medium' sx={{ color: 'grey', mt: '4px' }} />
			<Typography variant='h5' fontWeight='500' sx={{ mb: 2 }} color='grey'>
				Пока что тут пусто
			</Typography>
		</Box>
	);
}

export default DashboardNun;
