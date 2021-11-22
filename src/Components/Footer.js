import { Nav } from 'react-bootstrap';

function Footer() {
	return (
		<div className='Footer'>
			<Nav
				className='justify-content-center'
				variant='pills'
				defaultActiveKey='/home'>
				<Nav.Item>
					<Nav.Link /*href='/home'*/ eventKey='link-1'> Option 1</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link /*href='/home'*/ eventKey='link-2'> Option 2</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link /*href='/home'*/ eventKey='link-3'> Option 3</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link /*href='/home'*/ eventKey='link-4'> Option 4</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link /*href='/home'*/ eventKey='link-5'> Option 5</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link /*href='/home'*/ eventKey='link-5'> Option 5</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}

export default Footer;
