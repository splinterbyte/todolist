import { create } from 'zustand'

interface Task {
	id: number
	borderId: number
	title: string | undefined
}

interface ITaskStore {
	tasks: Task[]
	addTask: (borderId: number) => void
	deleteTask: (id: number) => void
	updateTask: (id: number, title: string | undefined) => void
}

export const useTaskStore = create<ITaskStore>(set => ({
	tasks: [],
	addTask: (borderId: number) => {
		const newTask: Task = {
			id: Date.now(),
			borderId,
			title: '',
		}
		set(state => ({ tasks: [...state.tasks, newTask] }))
	},
	deleteTask: (id: number) => {
		set(state => ({
			tasks: state.tasks.filter(task => task.id !== id),
		}))
	},
	updateTask: (id: number, title: string | undefined) => {
		set(state => ({
			tasks: state.tasks.map(task =>
				task.id === id ? { ...task, title } : task
			),
		}))
	},
}))
