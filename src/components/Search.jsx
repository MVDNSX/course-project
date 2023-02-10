import FindUser from "./FindUser"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { clearSearch, getSearchUser } from "../redux/reduxSlices/searchSlice";

const Search = () => {
	
	const dispatch = useDispatch();
	const user = useSelector(state => state.search.resultSearch)
	const [findUsername, setFindUsername] = useState('')

	const handleSearch = (e) => {
		setFindUsername(e.target.value)
		if(findUsername.length > 3){
			setTimeout(() => {
				dispatch(getSearchUser(findUsername))
			}, 1000);
		}
	}

	const handleClickSearch = () => {
		setFindUsername([]);
		dispatch(clearSearch())
	}

	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Find a username" value={findUsername} onChange={(e)=> {handleSearch(e)}}/>

			</div>
			{user === null ? '' : user.map(u => <FindUser key={u.id} withUserId={u.id} withUserName={u.username} handleClickSearch={handleClickSearch}/>)}
		</div>
	)
}

export default Search