import axios from "axios";

const host = axios.create({
	baseURL: 'http://localhost:5000/',
	//withCredentials: true,
	headers: {
		'content-type': 'application/json',
	}
})

const instanseAuth = axios.create({
	baseURL: 'http://localhost:5000/',
	//withCredentials: true,
	headers: {
		'content-type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`
	}
})

export const authAPI = {
	getAuth(authUserData) {
		return host.post('api/user/login', authUserData)
	},
	regNewUser(regUserData) {
		return host.post('api/user/register', regUserData)
	},
	getCheck() {
		return instanseAuth.get('api/user/check')
	}
}

export const dialogAPI = {
	createDialog(withUserData) {
		return instanseAuth.post('api/dialog/create', withUserData)
	},
	getDialogs() {
		return instanseAuth.get('api/dialog/load')
	}
}

export const userAPI = {
	searchUser(username) {
		return host.get(`api/user/load?username=${username}`)
	}
}