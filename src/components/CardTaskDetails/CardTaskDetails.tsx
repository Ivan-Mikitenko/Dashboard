import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Fade } from '../ui/Fade.tsx';
import { memo, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import CardTask from '../CardTask/CardTask.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

type CardTaskDetailsType = {
	title: string;
	description: string;
	subtasksId: number[];
	id: number;
};

function CardTaskDetails({ title, description, subtasksId, id }: CardTaskDetailsType) {
	const [open, setOpen] = useState(false);
	const { subtasks } = useSelector((store: RootState) => store.dashboard);
	const arrSubtasks = Object.values(subtasks);
	const subtasksObject = arrSubtasks.filter(item => subtasksId.includes(item.id));

	return (
		<Box sx={{ width: '100%' }}>
			<CardTask
				subtasks={subtasksObject}
				title={title}
				description={description}
				onClick={() => setOpen(!open)}
				id={id}
			/>
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
							sx={{ fontWeight: 'bold', mb: 1 }}>
							{title}
						</Typography>
						<Typography id='parent-modal-description'>{description}</Typography>
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
								{subtasksObject.map((item, index: number) => (
									<FormControlLabel
										key={index}
										label={item.title}
										control={
											<Checkbox
												onClick={event => {
													event.stopPropagation();
												}}
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
						</Box>
					</Box>
				</Fade>
			</Modal>
		</Box>
	);
}

const CardTaskDetailsMemo = memo(CardTaskDetails);
export default CardTaskDetailsMemo;
