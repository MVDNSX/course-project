import avatar from '../assets/avatar.png'

const FindUser = ({userId, username}) => {
	const handleClick = (e) => {
		console.log(userId, username)
	}
	return (
		<div className="findUser" onClick={handleClick}>
				<img src={avatar} alt="avatar" />
				<div className="userInfo">
					<span>{username}</span>
				</div>
			</div>
	)
}

export default FindUser