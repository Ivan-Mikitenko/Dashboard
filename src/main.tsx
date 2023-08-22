import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import '/firebase';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<CssBaseline />
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
