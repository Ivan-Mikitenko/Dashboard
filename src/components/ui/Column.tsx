import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

type ColumnType = {
	onChange: (value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	value: string;
	disabled: boolean;
	onRemove: () => void;
	columnTitle?: string;
};

function Column({ onChange, value, disabled, columnTitle = 'Column', onRemove }: ColumnType) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<TextField
				id='outlined-required'
				label={columnTitle}
				sx={{ width: '100%' }}
				onChange={event => {
					onChange(event);
				}}
				value={value}
			/>
			<IconButton
				disabled={disabled}
				aria-label='close'
				color='primary'
				sx={{ mt: '13px' }}
				onClick={onRemove}>
				<CloseIcon fontSize='large' color='primary' />
			</IconButton>
		</Box>
	);
}

export default Column;
