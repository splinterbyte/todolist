import { useMutation } from '@tanstack/react-query'
import { taskApi } from '..'

export const useDeleteTask = () =>
	useMutation({
		mutationFn: taskApi.deleteTask,
	})
