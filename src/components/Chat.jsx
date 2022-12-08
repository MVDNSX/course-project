import avatar from '../assets/avatar.png'
import {BiVideoPlus, BiPhone, BiDotsVerticalRounded} from 'react-icons/bi'

const Chat = () => {
	return (
		<div className="chat">
			<div className="chatInfo">
				<div className="chatUser">
					<div className="">
						<img src={avatar} alt="avatar" />
					</div>
					<div className="chatUserInfo">
						<span className='nik'>MVDNXS</span>
						<span className='lastTime'>last seen 3 minutes ago</span>
					</div>
				</div>
				<div className="chatIcons">
					<BiVideoPlus size='24px' />
					<BiPhone size='24px' />
					<BiDotsVerticalRounded size='24px' />
				</div>
			</div>
		</div>
	)
}

export default Chat