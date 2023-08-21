import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import NavItem from '../NavItem/NavItem.tsx';
import AddBoardModal from '../AddBoardModal/AddBoardModal.tsx';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { setActiveBoard } from '../../store/slices/dashboardSlice.ts';

function Navigation() {
	const { boards, columns, activeBoard } = useSelector((store: RootState) => store.dashboard);
	const dispatch = useDispatch();

	return (
		<>
			<Box sx={{ gridRow: '2/3' }}>
				<Box>
					<Typography sx={{ p: 3, pb: 1 }} fontSize='18px' fontWeight={500} color='grey'>
						ALL BOARDS ({Object.keys(boards).length})
					</Typography>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pr: 4 }}>
						{Object.values(boards).map(item => (
							<NavItem title={item.title} key={item.id} onClick={() => dispatch(setActiveBoard(item.id))} variant={activeBoard === item.id ? 'outlined' : 'contained'} />
						))}
						<AddBoardModal />
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Navigation;
