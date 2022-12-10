import FindUser from "./FindUser"

const Search = () => {
	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Find a username"/>
			</div>
			<FindUser/>
		</div>
	)
}

export default Search