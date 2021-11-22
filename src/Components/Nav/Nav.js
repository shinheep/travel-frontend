import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import CreateIcon from '@mui/icons-material/Create';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const linkStyle = {
	textDecoration: 'none',
	color:"white",
};

function Nav() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar sx={{ backgroundColor: '#05668D', color: '#F0F3BD' }}>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							flexGrow: 1,
							color: 'white',
							display: { xs: 'none', sm: 'block' },
						}}>
						
						<Link to='/' style={linkStyle}>
							{<AirplaneTicketIcon />}Travelgram
						</Link>{' '}
						&nbsp;&nbsp;
						<Link to='/createPost' style={linkStyle}>
							{<CreateIcon/>} Create Post
						</Link>
						&nbsp;&nbsp;
						<Link to='/teamPage' style={linkStyle}>
							{<ContactPageIcon />} Team Page
						</Link>
						&nbsp;&nbsp;
						<Link to='/loginSignup' style={linkStyle}>
							{<VpnKeyIcon/>} Login
						</Link>
					</Typography>

					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Search'
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Nav;
