import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/variablesColor.tsx';
import Home from './pages/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login.tsx';

// TODO: удалять не используемые imports (настройки в WebStorm)
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
