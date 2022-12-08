import '../pages/style.scss'
import avatar from '../assets/avatar.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">MVDNXS Chat</span>
			<div className="user">
				<img src={avatar} alt="avatar" />
				<button>logout</button>
			</div>
		</div>
	)
}

export default Navbar