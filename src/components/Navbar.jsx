import '../pages/style.scss'
import avatar from '../assets/avatar.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">MVDNXS Chat</span>
			<div className="user">
				<img src={avatar} alt="avatar" />
				<button><Link to='/login'>logout</Link></button>
			</div>
		</div>
	)
}

export default Navbar