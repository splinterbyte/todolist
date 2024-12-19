import axios from 'axios'

import { TTask } from '../model/task'

export const updateTask = async ({ borderId, id, text }: TTask) => {
	await axios.patch(`http://localhost:8000/borders/${borderId}/tasks/${id}`, {
		text,
	})
}
