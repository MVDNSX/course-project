import './style.scss'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import { getUsers } from '../redux/reduxSlices/usersSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
const Home = () => {

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getUsers())
	},[])


	return (
		<div className="home">
			<div className="container">
				<Sidebar/>
				<Chat/>
			</div>
		</div>
	)
}

export default Home