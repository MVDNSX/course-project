import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDialogs } from '../redux/reduxSlices/dialogSlice'
import ChatUser from './ChatUser'

const Chats = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getDialogs())
	}, [])
	const dialogs = useSelector((state) => state.dialogs.dialogs)

	return (
		<div className="chats">
			{dialogs === undefined 
			? '' 
			: dialogs.map(d => d.users[0].Dialog_User).map(info => <ChatUser key={info.dialogId} dialogId={info.dialogId} withUserId={info.withUserId} withUserName={info.withUserName}/>)}
		</div>
	)

}

// <ChatUser key={d.dialog_id} dialogId={d.dialog_id} username={'username'}/>

export default Chats