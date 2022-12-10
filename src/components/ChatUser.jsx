import avatar from '../assets/avatar.png'

const ChatUser = () => {
	return (
		<div className="chatUser">
				<img src={avatar} alt="avatar" />
				<div className="chatInfo">
					<span>Mvdnxs</span>
					<p>last message</p>
				</div>
			</div>
	)
}

export default ChatUser