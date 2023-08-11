import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/variablesColor.tsx';
import Home from './pages/Home/Home.tsx';

// TODO: удалять не используемые imports (настройки в WebStorm)
function App() {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</>
	);
}

export default App;
