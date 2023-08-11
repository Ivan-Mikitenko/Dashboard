import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import NavItem from '../NavItem/NavItem.tsx';
import AddBoardModal from '../AddBoardModal/AddBoardModal.tsx';
import { setActiveBoard } from '../../store/slices/data/dashboardSlice.ts';
import { RootState } from '../../store/store.ts';

function Navigation() {
	const { quantityBoards, boards, activeBoard } = useSelector(
		(store: RootState) => store.dashboard
	);
	const dispatch = useDispatch();

	return (
		<>
			<Box sx={{ gridRow: '2/3' }}>
				<Box>
					<Typography sx={{ p: 3, pb: 1 }} fontSize='18px' fontWeight={500} color='grey'>
						ALL BOARDS ({quantityBoards})
					</Typography>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pr: 4 }}>
						{boards.map((item, index: number) => (
							<NavItem
								title={item.title}
								key={index}
								onClick={() => dispatch(setActiveBoard(index))}
								variant={activeBoard === index ? 'outlined' : 'contained'}
							/>
						))}
						<AddBoardModal />
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Navigation;
