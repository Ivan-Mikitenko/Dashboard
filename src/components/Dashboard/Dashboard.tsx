import Box from '@mui/material/Box';
import DashboardColumn from '../DashboardColumn/DashboardColumn.tsx';
import AddColumn from '../AddColumn/AddColumn.tsx';
import { useSelector } from 'react-redux';
import DashboardNun from '../DashboardNun/DashboardNun.tsx';
import store, { RootState } from '../../store/store.ts';

function Dashboard() {
	const { boards, columns, activeBoard } = useSelector((store: RootState) => store.dashboard);
	const arrBoards = Object.values(boards);
	console.log('active boards', activeBoard);
	const activeColumns = arrBoards.find(item => item.id === activeBoard)?.columns;
	console.log('active Columns', activeColumns);
	const activeColumnsObjects = Object.values(columns).filter(
		item => activeColumns?.includes(item.id)
	);

	console.log('board', store.getState().dashboard);
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '30px',
				width: '100%',
				p: 2,
				overflowX: 'scroll',
				background: 'rgb(241 245 249/1)',
				...(activeColumns?.length === 0 && {
					justifyContent: 'center',
					alignItems: 'center'
				})
			}}>
			{activeColumns?.length === 0 || activeBoard === null ? (
				<DashboardNun />
			) : (
				<>
					{activeColumnsObjects.map(item => (
						<DashboardColumn
							key={item.id}
							title={item.title}
							activeTasks={item.tasks}
							id={item.id}
						/>
					))}
					<AddColumn />
				</>
			)}
		</Box>
	);
}

export default Dashboard;
