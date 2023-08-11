import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

type BasicSelectType = {
	title: string;
	handleChange: (event: SelectChangeEvent) => void;
	status: number;
};

function BasicSelect({ title, handleChange, status }: BasicSelectType) {
	const { boards, activeBoard } = useSelector((store: RootState) => store.dashboard);

	const selectedColumn = boards[activeBoard].columns.find(column => column.id === status);
	const text = selectedColumn ? selectedColumn.title : '';
	// TODO: не должен присваиваться index
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>{title}</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={text}
					label='Age'
					onChange={handleChange}>
					{boards[activeBoard].columns.map(item => (
						<MenuItem key={item.id} value={item.title}>
							{item.title}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

export default BasicSelect;
