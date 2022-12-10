import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'
const Sidebar = () => {

	const fakeUsers = [
		{id:1, username: 'MVDNSX'},
		{id:2, username: 'Volcano'},
		{id:3, username: 'Nikel'},
		{id:4, username: 'Boizel'},
		{id:5, username: 'Arti'},
	]

	return (
		<div className="sidebar">
			<Navbar/>
			<Search users={fakeUsers}/>
			<Chats/>
		</div>
	)
}

export default Sidebar