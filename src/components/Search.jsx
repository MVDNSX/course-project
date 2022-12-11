import FindUser from "./FindUser"
import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'

const Search = () => {

	const users = useSelector(state => state.users.users)
	const [findUsername, setFindUsername] = useState('')

	


	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Find a username" value={findUsername} onChange={(e)=> {setFindUsername(e.currentTarget.value)}}/>
			</div>
			{findUsername === '' ? '' : users.filter(u => u.username.toLowerCase().includes(findUsername.toLowerCase())).map(u => <FindUser key={u.id} userId={u.id} username={u.username}/>)}
		</div>
	)
}

export default Search