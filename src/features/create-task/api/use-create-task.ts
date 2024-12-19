import { useMutation } from '@tanstack/react-query'
import { taskApi } from '../../../entities/task'

export const useCreateTask = () =>
	useMutation({
		mutationFn: taskApi.createTask,
	})
