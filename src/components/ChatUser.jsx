import avatar from '../assets/avatar.png'

const ChatUser = ({dialogId, withUserId, withUserName}) => {
	console.log(withUserId)
	return (
		<div className="chatUser" dialog_id={dialogId}>
				<img src={avatar} alt="avatar" />
				<div className="chatInfo" >
					<span user_id={withUserId} >{withUserName}</span>
					<p>--------</p>
				</div>
			</div>
	)
}

export default ChatUser