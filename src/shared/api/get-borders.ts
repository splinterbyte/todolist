import axios from 'axios'

export const getBorders = async () => {
	const response = await axios.get(`http://localhost:8000/borders`)
	return response.data
}
