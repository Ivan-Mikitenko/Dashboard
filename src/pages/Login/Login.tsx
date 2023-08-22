import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
function Login() {
	const [mail, setMail] = useState('');
	const [pass, setPass] = useState('');

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100vh'
			padding={2}
			maxWidth='60%'
			margin='0 auto'>
			<TextField
				value={mail}
				onInput={e => setMail(e.target.value)}
				variant='outlined'
				margin='normal'
				required
				fullWidth
				id='email'
				label='Email Address'
				name='email'
				autoComplete='email'
				autoFocus
			/>

			<TextField
				value={pass}
				onInput={e => setPass(e.target.value)}
				variant='outlined'
				margin='normal'
				required
				fullWidth
				name='password'
				label='Password'
				type='password'
				id='password'
				autoComplete='current-password'
			/>

			<Box sx={{ display: 'flex', gap: '20px', mt: 4 }}>
				<Button variant='contained' fullWidth size='large' startIcon={<LoginIcon />}>
					Войти
				</Button>
				<Button disabled={true} type='submit' fullWidth size='large' variant='outlined'>
					Регистрация
				</Button>
			</Box>
		</Box>
	);
}

export default Login;
// TODO: сниппеты в webStorm
