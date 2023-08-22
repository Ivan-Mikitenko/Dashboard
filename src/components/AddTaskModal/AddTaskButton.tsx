import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import { useSelector } from 'react-redux';

type AddTaskButtonType = {
	onClick: () => void;
};

function AddTaskButton({ onClick }: AddTaskButtonType) {
	const { activeBoard } = useSelector(state => state.dashboard);
	console.log(activeBoard);
	return (
		<Button
			onClick={onClick}
			disabled={activeBoard === null}
			variant='contained'
			size='large'
			startIcon={<Add />}
			sx={{
				borderRadius: '20px',
				mr: 2
			}}>
			Add new task
		</Button>
	);
}

export default AddTaskButton;
