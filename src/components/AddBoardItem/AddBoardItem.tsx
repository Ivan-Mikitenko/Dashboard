import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

type AddBoardItemType = {
	onClick: () => void;
};

function AddBoardItem({ onClick }: AddBoardItemType) {
	return (
		<Button
			variant='contained'
			disabled={false}
			size='medium'
			startIcon={<AddCircleTwoToneIcon />}
			onClick={onClick}
			sx={{
				borderTopRightRadius: '28px',
				borderBottomRightRadius: '28px',
				borderTopLeftRadius: '0',
				borderBottomLeftRadius: '0',
				py: 2,
				width: '100%'
			}}>
			<Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
				add board
			</Typography>
		</Button>
	);
}

export default AddBoardItem;
