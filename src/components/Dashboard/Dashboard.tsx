import Box from '@mui/material/Box';
import DashboardColumn from '../DashboardColumn/DashboardColumn.tsx';
import AddColumn from '../AddColumn/AddColumn.tsx';
import { useSelector } from 'react-redux';
import DashboardNun from '../DashboardNun/DashboardNun.tsx';
import { RootState } from '../../store/store.ts';

function Dashboard() {
	const { boards, activeBoard } = useSelector((store: RootState) => store.dashboard);

	return (
		<Box
			sx={{
				display: 'flex',
				gap: '30px',
				width: '100%',
				p: 2,
				overflowX: 'scroll',
				background: 'rgb(241 245 249/1)',
				...(boards.length === 0 && {
					justifyContent: 'center',
					alignItems: 'center'
				})
			}}>
			{boards.length === 0 ? (
				<DashboardNun />
			) : (
				<>
					{boards[activeBoard].columns.map((item, index) => (
						<DashboardColumn
							key={index}
							titleColumn={item.title}
							quantities={item.tasks?.length || 0}
							index={index}
						/>
					))}
					<AddColumn />
				</>
			)}
		</Box>
	);
}

export default Dashboard;
