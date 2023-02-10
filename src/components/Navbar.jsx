import '../pages/style.scss'
import avatar from '../assets/avatar.png'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/reduxSlices/authSlice'
import { clearChats } from '../redux/reduxSlices/dialogSlice'

const Navbar = () => {
	const dispatch = useDispatch()
	const status = useSelector((state)=> state.auth.status)
	const loginUserName = useSelector((state) => state.auth.authUser.username)
	const handleLogOut = () => {
		dispatch(logOut())
		dispatch(clearChats())
	}
	if(!status){
		return <Navigate to='/login'/>
	}
	return (
		<div className="navbar">
			<span className="logo">MVDNXS Chat</span>
			<div className="user">
				<i>{loginUserName}</i>
				<img src={avatar} alt="avatar" />
				<button onClick={handleLogOut}>logout</button>
			</div>
		</div>
	)
}

export default Navbar