import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import AddTaskModal from '../AddTaskModal/AddTaskModal.tsx';
import { RootState } from '../../store/store.ts';

function Header() {
	const { boards, activeBoard } = useSelector((store: RootState) => store.dashboard);

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				p: 2,
				gridColumn: '1 / 3',
				gap: '88px'
			}}>
			<Box
				sx={{
					p: 2,
					pl: 0,
					display: 'flex',
					alignItems: 'center'
				}}>
				<img
					src='https://kanban-task-management-react-tailwind.vercel.app/static/media/logo-mobile.e60c2fbc3dcefa4256e0569ffba5e523.svg'
					alt='Логотоип'
					height='20px'
					width='20px'
				/>
				<Typography variant='h4' fontWeight='bold' sx={{ ml: 1 }}>
					kanban
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'end',
					width: '100%',
					pl: 2
				}}>
				<Typography
					variant='h5'
					sx={{
						fontWeight: '500'
					}}>
					{boards[activeBoard]?.title || ''}
				</Typography>
				<Box sx={{ display: 'flex' }}>
					<AddTaskModal />
				</Box>
			</Box>
		</Box>
	);
}

export default Header;
