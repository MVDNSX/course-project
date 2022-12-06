import axios from "axios";

const instanse = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	//withCredentials: true,
	//headers: {
	//	'API-KEY': '602bacaa-bd3d-4012-b37f-c0fc1050fdda'
	//}
})

export const usersAPI = {
	getUsers() {
		return instanse.get('/users')
	}
}