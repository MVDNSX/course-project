import {FaPaperPlane} from 'react-icons/fa'
import {FiPaperclip} from 'react-icons/fi'

const Input = () => {
	return (
		<div className="input">
			<input type="text" placeholder="Write something..."/>
			<div className="inputControls">
				<input type="file" name="file" id="file"/>
				<label htmlFor="file">
					<FiPaperclip size='22px'/>
				</label>
				<button><FaPaperPlane size='22px'/></button>
			</div>
		</div>
	)
}

export default Input