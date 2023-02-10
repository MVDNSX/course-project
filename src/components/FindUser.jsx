import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../assets/avatar.png'
import { createDialog, getDialogs } from '../redux/reduxSlices/dialogSlice'

const FindUser = ({withUserId, withUserName, ...props}) => {

	const dispatch =  useDispatch()
	const handleClick = async (e) => {
		await dispatch(createDialog({withUserId, withUserName}))
		props.handleClickSearch();
		await dispatch(getDialogs())
	}
	
	return (
		<div className="findUser" onClick={handleClick}>
				<img src={avatar} alt="avatar" />
				<div className="userInfo">
					<span>{withUserName}</span>
				</div>
			</div>
	)
}

export default FindUser