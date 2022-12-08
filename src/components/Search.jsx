import avatar from '../assets/avatar.png'

const Search = () => {
	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Find a username"/>
			</div>
			<div className="userChat">
				<img src={avatar} alt="avatar" />
				<div className="chatInfo">
					<span>Mvdnxs</span>
				</div>
			</div>
		</div>
	)
}

export default Search