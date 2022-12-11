import axios from "axios";

const instanse = axios.create({
	baseURL: 'http://localhost:5000',
	//withCredentials: true,
	headers: {
		//	'API-KEY': '602bacaa-bd3d-4012-b37f-c0fc1050fdda'
		'content-type': 'application/json'
	}
})

export const authAPI = {
	getAuth(authUserData) {
		return instanse.post('/auth', authUserData)
	},
	regNewUser(regUserData) {
		return instanse.post('/register', regUserData)
	}
}

export const usersAPI = {
	getUsers() {
		return instanse.get('/users')
	}
}