import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';

type AddTaskButtonType = {
	onClick: () => void;
};

function AddTaskButton({ onClick }: AddTaskButtonType) {
	return (
		<Button
			onClick={onClick}
			disabled={false}
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
