import { useState } from 'react'
import {FaPaperPlane} from 'react-icons/fa'
import {FiPaperclip} from 'react-icons/fi'

const Input = () => {

	const [message, setMessage] = useState('')

	const handleClick = (e) => {
		e.preventDefault();
		alert(`Send: ${message}`)
		setMessage('')
	} 
	return (
		<div className="input">
			<input type="text" placeholder="Write something..." value={message} onChange={(e) => setMessage(e.currentTarget.value)}/>
			<div className="inputControls">
				<input type="file" name="file" id="file"/>
				<label htmlFor="file">
					<FiPaperclip size='22px'/>
				</label>
				<button onClick={handleClick}><FaPaperPlane size='22px'/></button>
			</div>
		</div>
	)
}

export default Input