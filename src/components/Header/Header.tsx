import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import AddTaskModal from '../AddTaskModal/AddTaskModal.tsx';
import store, { RootState } from '../../store/store.ts';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBoard } from '../../store/slices/dashboardSlice.ts';

function Header() {
	const { boards, activeBoard } = useSelector((store: RootState) => store.dashboard);
	const dispatch = useDispatch();

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
					alignItems: 'center',
					width: '100%',
					pl: 2
				}}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
					<Typography
						variant='h5'
						sx={{
							fontWeight: '500'
						}}>
						{boards[activeBoard]?.title || ''}
					</Typography>
					{activeBoard !== null && (
						<IconButton
							aria-label='delete'
							size='large'
							color='secondary'
							onClick={() => {
								dispatch(deleteBoard());
							}}>
							<DeleteIcon fontSize='inherit' />
						</IconButton>
					)}
				</Box>
				<Box sx={{ display: 'flex' }}>
					<AddTaskModal />
				</Box>
			</Box>
		</Box>
	);
}

export default Header;
