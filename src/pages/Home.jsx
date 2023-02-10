import './style.scss'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import { useDispatch} from 'react-redux';
import { useEffect} from 'react';
import { getDialogs } from '../redux/reduxSlices/dialogSlice';
const Home = () => {

	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getDialogs())
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