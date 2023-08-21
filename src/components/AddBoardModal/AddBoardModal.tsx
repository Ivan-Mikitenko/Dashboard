import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import AddBoardItem from '../AddBoardItem/AddBoardItem.tsx';
import { TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { Fade } from '../ui/Fade.tsx';
import Column from '../ui/Column.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { BoardType } from '../../types/boardType.ts';
import { addBoard, addColumn } from '../../store/slices/dashboardSlice.ts';

function AddBoardModal() {
	const { boards, columns } = useSelector((store: RootState) => store.dashboard);
	const dispatch = useDispatch();
	const [shouldAddBoard, setShouldAddBoard] = useState(false);
	const [open, setOpen] = useState(false);
	const [maxIdColumn, setMaxIdColumn] = useState(
		Math.max(...Object.values(columns).map(column => column.id)) + 1
	);
	const maxIdBoard = Math.max(...Object.keys(boards).map(Number));

	const [valueColumns, setValueColumns] = useState([{ id: maxIdColumn, title: '', tasks: [] }]);
	const [valueBoard, setValueBoard] = useState<BoardType>({
		id: maxIdBoard + 1,
		title: '',
		columns: []
	});

	useEffect(() => {
		if (shouldAddBoard) {
			dispatch(addBoard(valueBoard));
			valueColumns.forEach(column => {
				dispatch(addColumn(column));
			});
			setValueBoard({
				id: maxIdBoard + 1,
				title: '',
				columns: []
			});
			setValueColumns([{ id: maxIdColumn, title: '', tasks: [] }]);
			setShouldAddBoard(false); // Сбросьте флаг после отправки
		}
	}, [valueBoard, shouldAddBoard, dispatch, maxIdBoard, maxIdColumn]);

	const handleRemoveColumn = (columnId: number) => {
		setValueColumns(prevColumns => prevColumns.filter(column => column.id !== columnId));
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
								value={valueBoard.title}
								onChange={event =>
									setValueBoard(prevValue => ({ ...prevValue, title: event.target.value }))
								}
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
							{valueColumns.map((item, index) => (
								<Column
									disabled={valueColumns.length === 1}
									key={item.id}
									value={item.title}
									onChange={event => {
										const updatedColumns = [...valueColumns];
										updatedColumns[index].title = event.target.value;
										setValueColumns(updatedColumns);
									}}
									onRemove={() => handleRemoveColumn(item.id)}
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
									onClick={() => {
										setMaxIdColumn(prevState => {
											const newMaxId = prevState + 1;
											setValueColumns(prevColumns => [
												...prevColumns,
												{ id: newMaxId, title: '', tasks: [] }
											]);
											return newMaxId;
										});
									}}>
									Add column
								</Button>

								<Button
									disabled={valueBoard.title.trim().length === 0}
									variant='contained'
									size='large'
									startIcon={<CreateNewFolderIcon />}
									onClick={() => {
										setValueBoard(prevState => ({
											...prevState,
											columns: valueColumns.map(column => column.id)
										}));
										setShouldAddBoard(true);
										setOpen(!open);
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
