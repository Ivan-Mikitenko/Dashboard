import Header from '../../components/Header/Header.tsx';
import Navigation from '../../components/Navigation/Navigation.tsx';
import Box from '@mui/material/Box';
import Dashboard from '../../components/Dashboard/Dashboard.tsx';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function Home() {
	return (
		<Box
			sx={{
				display: 'grid',
				overflow: 'hidden',
				gridTemplateColumns: '261px 1fr',
				gridTemplateRows: '76px 1fr',
				height: '100vh'
			}}>
			<Navigation />
			<Header />

			<DndProvider backend={HTML5Backend}>
				<Dashboard />
			</DndProvider>
		</Box>
	);
}

export default Home;
