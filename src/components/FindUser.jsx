import avatar from '../assets/avatar.png'

const FindUser = ({username}) => {
	return (
		<div className="findUser">
				<img src={avatar} alt="avatar" />
				<div className="userInfo">
					<span>{username}</span>
				</div>
			</div>
	)
}

export default FindUser