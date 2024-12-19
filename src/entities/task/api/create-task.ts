import axios from 'axios'

import { TTask } from '../model/task'

export const createTask = async ({ borderId }: Omit<TTask, 'text' | 'id'>) => {
	await axios.post(
		`http://localhost:8000/borders/${borderId}/tasks/
`,
		{}
	)
}
