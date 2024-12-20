import axios from 'axios'

export const deleteBorder = async (id: number): Promise<void> => {
	await axios.delete(`http://localhost:8000/borders/${id}`)
}
