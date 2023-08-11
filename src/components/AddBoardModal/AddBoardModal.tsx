import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { ChangeEvent, useState } from 'react';
import AddBoardItem from '../AddBoardItem/AddBoardItem.tsx';
import { TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useDispatch } from 'react-redux';
import { setNewBoard } from '../../store/slices/data/dashboardSlice.ts';
import { Fade } from '../ui/Fade.tsx';
import Column from '../ui/Column.tsx';
import { BoardType } from '../../types/boardType.ts';

// TODO: при размонтирование обнулять inputs
function AddBoardModal() {
	const [id, setId] = useState(3);
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const [value, setValue] = useState<BoardType>({
		title: '',
		columns: [{ id: 1, title: 'Todo' }]
	});

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value;
		setValue(prevValue => ({ ...prevValue, title: newTitle }));
	};

	const handleAddColumn = () => {
		const newId = id + 1;
		setId(newId);

		setValue(prevValue => ({
			...prevValue,
			columns: [...prevValue.columns, { id: newId, title: '' }]
		}));
	};

	const handleRemoveColumn = (index: number) => {
		setValue(prevValue => {
			const newColumns = [...prevValue.columns];
			newColumns.splice(index, 1);
			return {
				...prevValue,
				columns: newColumns
			};
		});
	};

	const handleColumnValueChange = (index: number, newValue: string) => {
		setValue(prevValue => {
			const newColumns = [...prevValue.columns];
			newColumns[index].title = newValue;
			return {
				...prevValue,
				columns: newColumns
			};
		});
	};

	return (
		<Box sx={{ width: '100%' }}>
			<AddBoardItem onClick={() => setOpen(!open)} />
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
							Add New Board
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
								label='Board Name'
								sx={{ width: '100%', mb: 2 }}
								value={value.title}
								onChange={handleTitleChange}
							/>

							<Typography
								id='spring-modal-description'
								sx={{ pb: 1, pt: 2.5 }}
								fontSize='18px'
								fontWeight={500}
								color='grey'>
								Board Columns
							</Typography>

							{/*BOARDS*/}
							{value.columns.map((item, index) => (
								<Column
									disabled={value.columns.length === 1}
									key={index}
									value={item.title}
									onChange={newValue => handleColumnValueChange(index, newValue)}
									onRemove={() => handleRemoveColumn(index)}
								/>
							))}

							<Box>
								<Button
									variant='contained'
									size='large'
									startIcon={<Add />}
									sx={{
										borderRadius: '20px',
										mt: 2,
										width: '100%',
										backgroundColor: theme => theme.palette.primary.dark
									}}
									onClick={handleAddColumn}>
									Add column
								</Button>

								<Button
									disabled={value.title.trim().length === 0}
									variant='contained'
									size='large'
									startIcon={<CreateNewFolderIcon />}
									onClick={() => {
										dispatch(setNewBoard(value));
										setOpen(!open);
										setValue(() => ({ title: '', columns: [{ id: 1, title: 'Todo' }] }));
									}}
									sx={{
										borderRadius: '30px',
										mt: 2,
										width: '100%',
										p: 2
									}}>
									Create new board
								</Button>
							</Box>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</Box>
	);
}

export default AddBoardModal;
