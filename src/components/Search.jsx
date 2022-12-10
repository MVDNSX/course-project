import FindUser from "./FindUser"
import { useState } from "react"

const Search = (props) => {

	const [findUsername, setFindUsername] = useState('')

	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Find a username" value={findUsername} onChange={(e)=> {setFindUsername(e.currentTarget.value)}}/>
			</div>
			{!findUsername ? '' : props.users.filter(u => u.username.toLowerCase().includes(findUsername.toLowerCase())).map(u => <FindUser key={u.id} username={u.username}/>)}
		</div>
	)
}

export default Search