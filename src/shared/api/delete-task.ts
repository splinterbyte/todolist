import axios from 'axios'

import { TTask } from '../model/task'

export const deleteTask = async ({ borderId, id }: Omit<TTask, 'text'>) => {
	await axios.delete(`http://localhost:8000/borders/${borderId}/tasks/${id}`)
}
