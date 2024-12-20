import axios from 'axios'

export const createBorder = async () => {
	const response = await axios.post(`http://localhost:8000/borders`, {})
	return response.data
}
