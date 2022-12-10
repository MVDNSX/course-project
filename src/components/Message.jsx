import avatar from '../assets/avatar.png'
import foto from '../assets/avatar.png'

const Message = () => {
	return (
		<div className="message">
			<div className="messageInfo">
				<img src={avatar} alt="avatar" />
				<span>18:32</span>
			</div>
			<div className="messageContent">
				<p>bla bla bla bla message</p>
				<img src={foto} alt="foto" />
			</div>
		</div>
	)
}

export default Message