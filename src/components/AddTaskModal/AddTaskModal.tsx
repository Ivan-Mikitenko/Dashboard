import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Fade } from '../ui/Fade.tsx';
import { ChangeEvent, useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Column from '../ui/Column.tsx';
import { useDispatch, useSelector } from 'react-redux';
import AddTaskButton from './AddTaskButton.tsx';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import BasicSelect from '../Select/BasicSelect.tsx';
import { SelectChangeEvent } from '@mui/material/Select';
import { setNewTask } from '../../store/slices/data/dashboardSlice.ts';
import { RootState } from '../../store/store.ts';

type DashboardsType = {
	title: string;
	description: string;
	idTask: string;
	subtasks?: {
		done: boolean;
		title: string;
	}[];
};

// TODO: при размонтирование обнулять inputs
function AddTaskModal() {
	const { boards, activeBoard } = useSelector((store: RootState) => store.dashboard);
	const [open, setOpen] = useState(false);
	const [status, setStatus] = useState(0);
	const dispatch = useDispatch();
	const initialTitle = boards[activeBoard]?.columns[status]?.title || '';

	const handleChange = (event: SelectChangeEvent) => {
		const selectedTitle = event.target.value as string;
		const selectedColumn = boards[activeBoard].columns.find(item => item.title === selectedTitle);
		if (selectedColumn) {
			setStatus(selectedColumn.id);
			setValue(prevValue => ({ ...prevValue, idTask: selectedColumn.title }));
		}
	};

	const [value, setValue] = useState<DashboardsType>({
		idTask: initialTitle,
		title: '',
		description: '',
		subtasks: [{ title: 'Открыть бизнес', done: false }]
	});

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value;
		setValue(prevValue => ({ ...prevValue, title: newTitle }));
	};

	const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newDescr = event.target.value;
		setValue(prevValue => ({ ...prevValue, description: newDescr }));
	};

	const handleAddSubtask = () => {
		setValue(prevValue => ({
			...prevValue,
			subtasks: [...(prevValue.subtasks || []), { title: '', done: false }]
		}));
	};

	const handleRemoveSubtask = (index: number) => {
		setValue(prevValue => {
			const newSubtasks = [...(prevValue.subtasks || [])];
			newSubtasks.splice(index, 1);
			return {
				...prevValue,
				subtasks: newSubtasks
			};
		});
	};

	const handleSubtaskValueChange = (index: number, newValue: string) => {
		setValue(prevValue => {
			const newSubtasks = [...(prevValue.subtasks || [])];
			newSubtasks[index].title = newValue;
			return {
				...prevValue,
				subtasks: newSubtasks
			};
		});
	};

	return (
		<Box sx={{ width: '100%' }}>
			<AddTaskButton onClick={() => setOpen(!open)} />
			<Modal
				aria-labelledby='spring-modal-title'
				aria-describedby='spring-modal-description'
				open={open}
				onClose={() => setOpen(false)}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						TransitionComponent: Fade
					}
				}}>
				<Fade in={open}>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 550,
							bgcolor: 'background.paper',
							boxShadow: 24,
							p: 3,
							borderRadius: '10px'
						}}>
						<Typography
							id='spring-modal-title'
							variant='h4'
							component='h2'
							sx={{ fontWeight: 'bold', mb: 2 }}>
							Add New Task
						</Typography>
						<Box
							component='form'
							sx={{
								'& .MuiTextField-root': { mt: 2 }
							}}
							noValidate
							autoComplete='off'>
							<TextField
								required
								label='Task Name'
								sx={{ width: '100%', mb: 2 }}
								value={value.title}
								onChange={handleTitleChange}
							/>

							<TextField
								label='Description'
								sx={{ width: '100%', mb: 2 }}
								value={value.description}
								onChange={handleDescriptionChange}
							/>

							<Typography
								id='spring-modal-description'
								sx={{ pb: 1, pt: 2.5 }}
								fontSize='18px'
								fontWeight={500}
								color='grey'>
								Subtasks
							</Typography>

							{value.subtasks?.map((item, index) => (
								<Column
									disabled={false}
									columnTitle={`${index + 1}`}
									key={index}
									value={item.title}
									onChange={newValue => handleSubtaskValueChange(index, newValue)}
									onRemove={() => handleRemoveSubtask(index)}
								/>
							))}

							<Box>
								<Button
									variant='contained'
									size='large'
									startIcon={<PlaylistAddIcon />}
									sx={{
										borderRadius: '20px',
										mt: 2,
										mb: 6,
										width: '100%',
										backgroundColor: theme => theme.palette.primary.dark
									}}
									onClick={handleAddSubtask}>
									Add subtask
								</Button>

								<BasicSelect title={'Status'} status={status} handleChange={handleChange} />

								<Button
									variant='contained'
									size='large'
									startIcon={<PlusOneIcon />}
									sx={{
										borderRadius: '30px',
										mt: 2,
										width: '100%',
										p: 2
									}}
									onClick={() => {
										setOpen(!open);
										dispatch(setNewTask({ task: value, columnId: status }));
									}}>
									Create new task
								</Button>
							</Box>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</Box>
	);
}

export default AddTaskModal;
