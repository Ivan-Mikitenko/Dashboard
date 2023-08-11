import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type NavItemType = {
	title: string;
	onClick: () => void;
	variant: string;
};

function NavItem({ title, onClick, variant }: NavItemType) {
	return (
		<Button
			onClick={onClick}
			variant={variant}
			disabled={false}
			size='medium'
			startIcon={<AssignmentTwoToneIcon />}
			sx={{
				borderTopRightRadius: '28px',
				borderBottomRightRadius: '28px',
				borderTopLeftRadius: '0',
				borderBottomLeftRadius: '0',
				py: 2
			}}>
			<Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
				{title}
			</Typography>
		</Button>
	);
}

export default NavItem;

// TS2304: Cannot find name 'DeleteIcon'.
