import './style.scss'
import {AiFillFileImage} from 'react-icons/ai'

const Register = () => {
	return (
		<div className="registerContainer">
			<div className="registerWallpapper">
				<span className='registerChatName'>MVDNXS Chat</span>
				<span>Register</span>
				<form action="" className='registerForm'>
					<input type="text" placeholder='Your Name' />
					<input type="email" placeholder='Your Email' />
					<input type="password" placeholder='Password' />
					<label className='avatarLabel' htmlFor="avatar">
						<AiFillFileImage size='20px' color='#664de5'/>
						 load file
						<input className='avatar' type="file" id="avatar"/>
					</label>
					<button>Sign up</button>
				</form>
				<span>You do have account? <a className='link' href='#'>Login</a></span>
			</div>
		</div>
	)
}

export default Register