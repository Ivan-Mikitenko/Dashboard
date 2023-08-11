import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Fade } from '../ui/Fade.tsx';
import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CardTask from '../CardTask/CardTask.tsx';
import { SubtaskType } from '../../types/taskType.ts';
import { useDispatch } from 'react-redux';

function CardTaskDetails({ ColumnIndex, ...item }) {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	return (
		<Box sx={{ width: '100%' }}>
			<CardTask {...item} onClick={() => setOpen(!open)} />
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
							{item.title}
						</Typography>
						<Box
							component='form'
							sx={{
								'& .MuiTextField-root': { mt: 2 }
							}}
							noValidate
							autoComplete='off'>
							<Typography
								id='spring-modal-description'
								sx={{ pb: 1, pt: 2.5 }}
								fontSize='18px'
								fontWeight={500}
								color='grey'>
								Subtasks
							</Typography>
							<FormGroup>
								{item.subtasks?.map((item: SubtaskType, index: number) => (
									<FormControlLabel
										onClick={() => console.log('ok')}
										key={index}
										label={item.title}
										control={
											<Checkbox
												checked={item.done}
												color='success'
												sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
											/>
										}
										sx={{
											backgroundColor: '#f0e7fd',
											borderRadius: '20px',
											margin: '0 0 10px 0',
											textDecoration: item.done ? 'line-through' : 'none'
										}}
									/>
								))}
							</FormGroup>

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
									}}>
									Add subtask
								</Button>
							</Box>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</Box>
	);
}

export default CardTaskDetails;